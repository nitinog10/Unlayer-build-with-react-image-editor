import { useRef, useState } from 'react';

import ImageEditor, {
  type ImageEditorRef,
  type ImageEditorSaveResult,
} from '@unlayer/react-image-editor';

import { DISTRICTS, HUSTLES, PALETTES, SAMPLES, type Character } from '../data';
import Wanted from './Wanted';

// Expose only the tools that matter for a loading-screen portrait; hide the
// resize/shape tools that don't serve the poster.
const EDITOR_OPTIONS = {
  theme: 'dark' as const,
  features: {
    imageEditor: {
      tools: {
        crop: true,
        filter: true,
        text: true,
        stickers: true,
        frame: true,
        draw: true,
        resize: false,
        shapes: false,
      },
    },
  },
};

const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;

interface StudioProps {
  character: Character;
  onCharacterChange: (character: Character) => void;
  image: string;
  onImageChange: (image: string) => void;
  onGenerate: (dataUrl: string) => void;
  onExit: () => void;
}

export default function Studio(props: StudioProps) {
  const { character, onCharacterChange, image, onImageChange } = props;

  const editorRef = useRef<ImageEditorRef>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const readTokenRef = useRef(0);
  const readerRef = useRef<FileReader | null>(null);

  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState('Booting Photo Mode…');

  const set = <K extends keyof Character>(key: K, value: Character[K]) =>
    onCharacterChange({ ...character, [key]: value });

  const capture = () => {
    const editor = editorRef.current?.editor;
    if (!editor) {
      setStatus('Editor is still loading — give it a second.');
      return;
    }
    try {
      const dataUrl = editor.getImage();
      if (!dataUrl) {
        setStatus('Could not capture this photo. Try uploading your own.');
        return;
      }
      props.onGenerate(dataUrl);
    } catch {
      // A cross-origin sample can taint the canvas; an uploaded photo never does.
      setStatus('This source is export-blocked. Upload a photo to continue.');
    }
  };

  const chooseSample = (src: string) => {
    readerRef.current?.abort();
    readTokenRef.current++;
    onImageChange(src);
    setStatus('Sample loaded into Photo Mode.');
  };

  const upload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setStatus(`"${file.name}" is not an image.`);
      return;
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      setStatus(`"${file.name}" is over the 20 MB limit.`);
      return;
    }
    readerRef.current?.abort();
    const token = ++readTokenRef.current;
    const reader = new FileReader();
    readerRef.current = reader;
    reader.onload = () => {
      if (token !== readTokenRef.current) return;
      onImageChange(reader.result as string);
      setStatus(`Loaded "${file.name}".`);
    };
    reader.onerror = () => {
      if (token !== readTokenRef.current) return;
      setStatus(`Could not read "${file.name}".`);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="studio">
      <header className="studio-bar">
        <button className="studio-back" onClick={props.onExit}>
          ‹ Leonida
        </button>
        <div className="studio-brand">
          <span className="studio-brand-vi">VI</span>
          <span className="studio-brand-name">Vice City · Photo Mode</span>
        </div>
        <span className={`studio-status ${ready ? '' : 'studio-status--wait'}`}>
          {status}
        </span>
      </header>

      <div className="studio-grid">
        <aside className="dossier">
          <div className="dossier-head">
            <h2 className="dossier-title">Resident dossier</h2>
            <span className="dossier-no">FILE 001</span>
          </div>

          <div className="field">
            <label htmlFor="c-name">Name</label>
            <input
              id="c-name"
              value={character.name}
              maxLength={28}
              placeholder="Who are they?"
              onChange={(e) => set('name', e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="c-hustle">Hustle</label>
            <select
              id="c-hustle"
              value={character.hustle}
              onChange={(e) =>
                set('hustle', e.target.value as Character['hustle'])
              }
            >
              {HUSTLES.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="c-district">District</label>
            <select
              id="c-district"
              value={character.district}
              onChange={(e) =>
                set('district', e.target.value as Character['district'])
              }
            >
              {DISTRICTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <span className="field-label">Wanted level</span>
            <Wanted value={character.wanted} onChange={(v) => set('wanted', v)} />
          </div>

          <div className="field">
            <span className="field-label">Color grade</span>
            <div className="palette-row">
              {PALETTES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`swatch ${
                    character.paletteId === p.id ? 'swatch--on' : ''
                  }`}
                  style={{ backgroundImage: p.wash, borderColor: p.accent }}
                  aria-pressed={character.paletteId === p.id}
                  onClick={() => set('paletteId', p.id)}
                >
                  <span style={{ background: p.glow }} />
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <span className="field-label">Source photo</span>
            <div className="sample-row">
              {SAMPLES.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`sample ${image === src ? 'sample--on' : ''}`}
                  aria-label={`Use sample ${i + 1}`}
                  onClick={() => chooseSample(src)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
            <button
              className="btn btn--ghost upload-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              Upload your photo
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                e.target.value = '';
                if (file) upload(file);
              }}
            />
          </div>
        </aside>

        <section className="stage">
          <div className="stage-head">
            <h2 className="stage-title">Photo Mode</h2>
            <p className="stage-tools">
              Crop · filter · text · stickers · frame · draw
            </p>
          </div>
          <div className="photo-frame hud">
            <ImageEditor
              ref={editorRef}
              image={image}
              minHeight={560}
              options={EDITOR_OPTIONS}
              onLoad={() => {
                setReady(true);
                setStatus('Photo Mode ready. Crop it, grade it, make it yours.');
              }}
              onSave={(r: ImageEditorSaveResult) => props.onGenerate(r.dataUrl)}
              onLoadError={() => setStatus('That image failed to load.')}
              onError={(err) => setStatus(`Editor error: ${err.message}`)}
            />
          </div>

          <div className="stage-actions">
            <p className="stage-hint">
              Edit the shot, then lock it into your loading screen.
            </p>
            <button
              className="btn btn--primary"
              onClick={capture}
              disabled={!ready}
            >
              Generate loading screen
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
