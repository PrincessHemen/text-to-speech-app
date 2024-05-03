import React, { useState, useEffect } from 'react';
import './TextToSpeech.css';
import playbtn from '../Assets/play-button-arrowhead.png';

const TextToSpeech = () => {
    let speech = new SpeechSynthesisUtterance();

    useEffect(() => {
        const handleClick = () => {
            speech.text = document.querySelector("textarea").value;
            window.speechSynthesis.speak(speech);
        };

        document.querySelector("button").addEventListener("click", handleClick);

        return () => {
            document.querySelector("button").removeEventListener("click", handleClick);
        };
    }, []); // Empty dependency array ensures that this effect runs only once on mount

    return (
        <div>
            <div className="hero">
                <h1>Text-to-Speech <span>Converter</span></h1>
                <textarea placeholder='Write anything here...'></textarea>
                <div className="row">
                    <select name='' id=''></select>
                    <button className='btn'><img src={playbtn} alt="play icon" /> Listen</button>
                </div>
            </div>
        </div>
    );
};

export default TextToSpeech;
