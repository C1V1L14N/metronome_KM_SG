import React, {useState, useEffect} from 'react';
import play_button from '../assets/play_button.png';
import metronome from '../assets/metronome.wav';

const Metronome = () => {

    const metronomeAudio = new Audio(metronome);
    const [play, setPlay] = useState(false);
    const [bpm, setBpm] = useState(100);
    const [count, setCount] = useState(0);
    const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
    const [storedInterval, setStoredInterval] = useState({});

    

    const changeBpm = (event) => {
        let bpm = event.target.value; 
        setBpm(parseInt(bpm));
    }

    const handlePlay = () => {
        const sounds = () => {metronomeAudio.play()};
        const timer = setInterval(sounds, (60 / bpm) * 1000);
        setStoredInterval(timer);
        setPlay(true);
        setCount(0);
        setBeatsPerMeasure(4);
    
    }

    const handleStop = () => {
        clearInterval(storedInterval);
            setPlay(false);
    }



    const useEffect = (() => {
        changeBpm()
    }, [bpm]);

    return(
        <>
            <h3>This is where the range input will be...</h3>
            <div id="metronome-div">  
                <label for="bpm">BPM: {bpm}</label>
                <input onChange={changeBpm} type="range" id="bpm" name="bpm" min="40" max="208" value={bpm}></input>
            </div>
            <img onClick={handlePlay} src={play_button} alt="play button"/>

            <img onClick={handleStop} src={play_button} alt="stop button"/>
            
            

        </> 

    )

}


export default Metronome;


// {playing ? 'Stop' : 'Start'}

