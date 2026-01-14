import { useState, useRef, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faForwardStep,
  faPlay,
  faPause,
  faBackwardStep,
  faRepeat,
  faShuffle,
  faMaximize,
  faMinimize
} from "@fortawesome/free-solid-svg-icons"

const MP3_URL =
  'https://nu.vgmtreasurechest.com/soundtracks/subarashiki-hibi-soundtrack-cd/mzlhaimm/1-02.%20Night%20Sunflowers.mp3'

function Player() {
  const [isCompact, setIsCompact] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef(null)

  const album = 'Wonderful Everyday Original Soundtrack'
  const title = 'Yoru no Himawari'
  const artist = 'Matsumoto Fuminori'
  const cover = '../test-img.png'

  const toggleLayout = () => setIsCompact(p => !p)
  const togglePlay = () => setIsPlaying(p => !p)

  /* =========================================================
     AUDIO CONTROL
  ========================================================= */

  useEffect(() => {
    if (!audioRef.current) return
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  const formatTime = (time) => {
    if (!Number.isFinite(time)) return '0:00'
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60)
    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  /* =========================================================
     PROGRESS BAR (SHARED)
  ========================================================= */

  const ProgressBar = () => (
    <div className="song-progress-bar">
      <input
        type="range"
        min="0"
        max={duration}
        step="0.1"
        value={Math.min(currentTime, duration)}
        onChange={(e) => {
          const t = Number(e.target.value)
          audioRef.current.currentTime = t
          setCurrentTime(t)
        }}
        style={{ width: '100%' }}
      />
      <div className="d-flex justify-content-between">
        <small>{formatTime(currentTime)}</small>
        <small>{formatTime(duration)}</small>
      </div>
    </div>
  )

  /* =========================================================
     PLAYER CONTROLS (REUTILIZÁVEL)
  ========================================================= */

  const PlayerControls = () => (
    <>
      <button className='p-2 m-1 border rounded'>
        <FontAwesomeIcon icon={faShuffle} />
      </button>

      <button className='p-2 m-1 border rounded'>
        <FontAwesomeIcon icon={faBackwardStep} />
      </button>

      <button className='p-2 m-1 border rounded' onClick={togglePlay}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>

      <button className='p-2 m-1 border rounded'>
        <FontAwesomeIcon icon={faForwardStep} />
      </button>

      <button className='p-2 m-1 border rounded'>
        <FontAwesomeIcon icon={faRepeat} />
      </button>

      <button className='p-2 m-1 border rounded' onClick={toggleLayout}>
        <FontAwesomeIcon icon={isCompact ? faMaximize : faMinimize} />
      </button>
    </>
  )

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div>
      {/* AUDIO — MONTADO UMA ÚNICA VEZ */}
      <audio
        ref={audioRef}
        src={MP3_URL}
        onLoadedMetadata={(e) => setDuration(e.target.duration || 0)}
        onTimeUpdate={(e) => {
          const t = e.target.currentTime
          if (t <= duration) setCurrentTime(t)
        }}
        onEnded={() => {
          setIsPlaying(false)
          setCurrentTime(duration)
        }}
      />

      {/* LARGE PLAYER */}
      {!isCompact && (
        <div className='border border-1 p-4'>
          <p>{album}</p>

          <img className='m-2 img-thumbnail' src={cover} width="350" />

          <h3>{title}</h3>
          <p>{artist}</p>

          <ProgressBar />

          <div>
            <PlayerControls />
          </div>
        </div>
      )}

      {/* COMPACT PLAYER */}
      {isCompact && (
        <div className='border row p-2 align-items-center'>
          <div className='col-2'>
            <img className="img-thumbnail" src={cover} />
          </div>

          <div className='col-6'>
            <p className='m-0'>{title}</p>
            <small>{artist}</small>
            <ProgressBar />
          </div>

          <div className='col-4 text-end'>
            <PlayerControls />
          </div>
        </div>
      )}
    </div>
  )
}

export default Player
