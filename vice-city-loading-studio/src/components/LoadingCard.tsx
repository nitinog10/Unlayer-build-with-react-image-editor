import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { toBlob, toPng } from 'html-to-image';

import { paletteById, type Character } from '../data';
import Wanted from './Wanted';

interface LoadingCardProps {
  character: Character;
  photo: string;
  onReEdit: () => void;
  onNewCharacter: () => void;
}

const SHARE_TAG = '#BuiltWithImageEditor';

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'vice-city';

export default function LoadingCard({
  character,
  photo,
  onReEdit,
  onNewCharacter,
}: LoadingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const palette = paletteById(character.paletteId);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Your loading screen is ready.');
  const [busy, setBusy] = useState(false);

  // Fill the loading bar once on reveal — the one orchestrated motion here.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setProgress(100);
      return;
    }
    const start = performance.now();
    const duration = 2000;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // Ease-out so it slows as it lands, like a real loader.
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const fileName = `${slugify(character.name)}-vice-city.png`;
  const caption = `${character.name || 'A new resident'} just landed in ${character.district}. ${SHARE_TAG}`;

  const render = async (): Promise<Blob | null> => {
    const node = cardRef.current;
    if (!node) return null;
    return toBlob(node, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: '#0c1620',
    });
  };

  const download = async () => {
    const node = cardRef.current;
    if (!node || busy) return;
    setBusy(true);
    setStatus('Rendering card…');
    try {
      const url = await toPng(node, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: '#0c1620',
      });
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      setStatus('Saved to your downloads.');
    } catch {
      setStatus('Export failed — try again.');
    } finally {
      setBusy(false);
    }
  };

  const copy = async () => {
    if (busy) return;
    if (!('clipboard' in navigator) || !('ClipboardItem' in window)) {
      setStatus('Your browser can’t copy images. Download it instead.');
      return;
    }
    setBusy(true);
    setStatus('Copying card…');
    try {
      const blob = await render();
      if (!blob) throw new Error('no blob');
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
      setStatus('Copied. Paste it anywhere.');
    } catch {
      setStatus('Couldn’t copy — download it instead.');
    } finally {
      setBusy(false);
    }
  };

  const share = async () => {
    if (busy) return;
    setBusy(true);
    setStatus('Preparing share…');
    try {
      const blob = await render();
      const file = blob
        ? new File([blob], fileName, { type: 'image/png' })
        : null;
      if (file && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Vice City loading screen',
          text: caption,
        });
        setStatus('Shared.');
      } else if (navigator.share) {
        await navigator.share({ title: 'Vice City loading screen', text: caption });
        setStatus('Shared.');
      } else {
        await navigator.clipboard?.writeText(caption);
        setStatus('Caption copied. Download the card to post it.');
      }
    } catch {
      setStatus('Share cancelled.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="result">
      <div
        className="result-glow"
        aria-hidden="true"
        style={{
          background: `radial-gradient(60% 55% at 50% 45%, ${palette.glow}55, transparent 70%)`,
        }}
      />

      <div
        className="card"
        ref={cardRef}
        style={{ '--accent': palette.accent } as CSSProperties}
      >
        <img className="card-photo" src={photo} alt={character.name} />
        <div className="card-wash" style={{ backgroundImage: palette.wash }} />
        <div className="card-scrim" style={{ backgroundImage: palette.scrim }} />

        <div className="card-top">
          <Wanted value={character.wanted} className="card-wanted" />
          <div className="card-logo">
            <span className="card-logo-vi">VI</span>
            <span className="card-logo-sub">Leonida</span>
          </div>
        </div>

        <div className="card-bottom">
          <p className="card-hustle">{character.hustle}</p>
          <h2 className="card-name">{character.name || 'Unknown'}</h2>
          <div className="card-meta">
            <span className="card-district">{character.district}</span>
            <span className="card-rule" />
          </div>

          <div className="card-loader">
            <div className="card-bar">
              <span
                className="card-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="card-pct">Loading {progress}%</span>
          </div>
        </div>
      </div>

      <div className="result-panel">
        <h2 className="result-eyebrow">Ready to roll</h2>
        <p className="result-status" role="status">
          {status}
        </p>
        <div className="result-actions">
          <button className="btn btn--primary" onClick={download} disabled={busy}>
            <span>{busy ? 'Working…' : 'Download card'}</span>
          </button>
          <div className="result-secondary">
            <button className="btn btn--ghost" onClick={copy} disabled={busy}>
              Copy
            </button>
            <button className="btn btn--ghost" onClick={share} disabled={busy}>
              Share
            </button>
          </div>
          <div className="result-secondary">
            <button className="btn btn--ghost" onClick={onReEdit}>
              Re-edit photo
            </button>
            <button className="btn btn--ghost" onClick={onNewCharacter}>
              Start over
            </button>
          </div>
        </div>
        <p className="result-share">
          Post it with <strong>{SHARE_TAG}</strong>
        </p>
      </div>
    </div>
  );
}
