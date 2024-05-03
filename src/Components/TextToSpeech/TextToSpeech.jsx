import React, { useEffect } from 'react';
import './TextToSpeech.css';
import playbtn from '../Assets/play-button-arrowhead.png';

const TextToSpeech = () => {
    let speech = new SpeechSynthesisUtterance();
    let voices = [];
    
    useEffect(() => {
        const handleClick = () => {
            speech.text = document.querySelector("textarea").value;
            window.speechSynthesis.speak(speech);
        };

        document.querySelector("button").addEventListener("click", handleClick);

        const voiceSelect = document.getElementById("select-lang"); // Moved declaration here

        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            speech.voice = voices[0];
            voiceSelect.innerHTML = ''; // Clear existing options
            voices.forEach((voice, i) => {
                const option = document.createElement('option');
                option.text = voice.name;
                option.value = i;
                voiceSelect.appendChild(option);
            });
        };

        voiceSelect.addEventListener("change", () => {
            // When the value of the select dropdown changes, update the speech voice
            speech.voice = voices[voiceSelect.value];
        });        

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
                    <select name='select-lang' id='select-lang'></select>
                    <button className='btn'><img src={playbtn} alt="play icon" /> Listen</button>
                </div> 
            </div>
        </div>
    );
};

export default TextToSpeech;
