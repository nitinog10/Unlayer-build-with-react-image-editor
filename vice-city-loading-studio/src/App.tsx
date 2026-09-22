import { useState } from 'react';

import { DEFAULT_CHARACTER, SAMPLES, type Character } from './data';
import Hero from './components/Hero';
import Studio from './components/Studio';
import LoadingCard from './components/LoadingCard';

type Stage = 'intro' | 'studio' | 'card';

export default function App() {
  const [stage, setStage] = useState<Stage>('intro');
  const [character, setCharacter] = useState<Character>(DEFAULT_CHARACTER);
  // The base image the editor loads. Re-editing swaps in the baked result so
  // work continues from where it left off.
  const [image, setImage] = useState<string>(SAMPLES[0]);
  const [editedDataUrl, setEditedDataUrl] = useState<string | null>(null);

  const generate = (dataUrl: string) => {
    setEditedDataUrl(dataUrl);
    setStage('card');
  };

  const reEdit = () => {
    if (editedDataUrl) setImage(editedDataUrl);
    setStage('studio');
  };

  const newCharacter = () => {
    setCharacter(DEFAULT_CHARACTER);
    setImage(SAMPLES[0]);
    setEditedDataUrl(null);
    setStage('studio');
  };

  return (
    <>
      <div className="fx" aria-hidden="true">
        <div className="fx-sky" />
        <div className="fx-sun" />
        <div className="fx-grain" />
        <div className="fx-scan" />
      </div>

      {stage === 'intro' && <Hero onEnter={() => setStage('studio')} />}

      {stage === 'studio' && (
        <Studio
          character={character}
          onCharacterChange={setCharacter}
          image={image}
          onImageChange={setImage}
          onGenerate={generate}
          onExit={() => setStage('intro')}
        />
      )}

      {stage === 'card' && editedDataUrl && (
        <LoadingCard
          character={character}
          photo={editedDataUrl}
          onReEdit={reEdit}
          onNewCharacter={newCharacter}
        />
      )}
    </>
  );
}
