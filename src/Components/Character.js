// Character.js
import React, { useState } from 'react';
import CharacterMod from './CharacterMod.module.css';

function Character({ name, sounds, soundNames }) {
    const [audio] = useState(new Audio());

    const handleAudioPlay = (e) => {
        audio.src = e.target.value;
        audio.play();
    };

    return (
        <div className={`${CharacterMod.SoundsCon} glass`}>
            <div className={CharacterMod.NameCon}>
                <h2>{name}</h2>
            </div>
            <div className={CharacterMod.Sounds}>
                {sounds.length > 0 ? (
                    sounds.map((sound, index) => (
                        <button
                            className={CharacterMod.SoundsBtn}
                            value={sound}
                            key={index}
                            onClick={handleAudioPlay}
                        >
                            {soundNames[index]}
                        </button>
                    ))
                ) : (
                    <p>
                        No sounds available for <span>{name}</span>
                    </p>
                )}
            </div>
        </div>
    );
}

export default Character;
