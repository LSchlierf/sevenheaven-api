import React, { useState } from 'react';
import './AudioPlayer.css'
import { IconContext } from 'react-icons';
import { GrPlayFill, GrPauseFill } from "react-icons/gr";

function AudioPlayer(props) {
  const title = props.title || '!!Titel fehlt!!'
  const audio = props.src
  const [icon, setIcon] = useState(<GrPlayFill/>)
  const [time, setTime] = useState(0)
  const [timeStamp, setTimeStamp] = useState('00:00')
  function toggleAudio() {
    const audioElement = document.getElementById(audio)
    if(audioElement.paused) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
  }
  function changeTimelinePosition () {
    const audioElement = document.getElementById(audio)
    const timelineElement = document.getElementById('timeline')
    const percentagePosition = (100*audioElement.currentTime) / audioElement.duration
    timelineElement.style.backgroundSize = percentagePosition + '% 100%'
    setTime(percentagePosition)
    setTimeStamp(new Date(audioElement.currentTime * 1000).toISOString().substring(14, 19))
  }
  function changeSeek () {
    const audioElement = document.getElementById(audio)
    const timelineElement = document.getElementById('timeline')
    const time = (timelineElement.value * audioElement.duration) / 100;
    audioElement.currentTime = time;
    setTime(timelineElement.value)
  }
  return (
    <>
      <div className='audioPlayer'>
        <div className='audioControls'>
          <div className='playPause' onClick={toggleAudio}>
            <IconContext.Provider value={{color: 'black', size: 20}}>
              {icon}
            </IconContext.Provider>
          </div>
          <div className='timelineWrapper'>
            <input type='range' className='timeline' id='timeline' max='100' value={time} onChange={changeSeek}/>
            <div className='timeStamp'>
              {timeStamp}
            </div>
          </div>
        </div>
        <audio src={audio} id={audio} onTimeUpdate={changeTimelinePosition} onPause={() => setIcon(<GrPlayFill/>)} onPlay={() => setIcon(<GrPauseFill/>)}/>
        <div className='trackTitle'>
          {title}
        </div>
      </div>
    </>
  )
}

export default AudioPlayer