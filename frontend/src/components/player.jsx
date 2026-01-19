import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faForwardStep,
  faPlay,
  faPause,
  faBackwardStep,
  faRepeat,
  faShuffle
} from '@fortawesome/free-solid-svg-icons'

const MP3_URL =
  'https://nu.vgmtreasurechest.com/soundtracks/subarashiki-hibi-soundtrack-cd/mzlhaimm/1-02.%20Night%20Sunflowers.mp3'

function Player() {
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)

  const album = 'Wonderful Everyday Original Soundtrack'
  const title = 'Yoru no Himawari'
  const artist = 'Matsumoto Fuminori'
  const cover = '../test-img.png'

  /* =========================================================
     AUDIO CONTROL
  ========================================================= */

  useEffect(() => {
    if (!audioRef.current) return
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = volume
  }, [volume])

  const togglePlay = () => setIsPlaying(p => !p)

  const formatTime = (time) => {
    if (!Number.isFinite(time)) return '0:00'
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60)
    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  /* =========================================================
     COMPONENTS
  ========================================================= */

  const ProgressBar = () => (
    <div className="mt-3">
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
        className="form-range"
      />
      <div className="d-flex justify-content-between">
        <small>{formatTime(currentTime)}</small>
        <small>{formatTime(duration)}</small>
      </div>
    </div>
  )

  const Controls = () => (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-secondary mx-1">
        <FontAwesomeIcon icon={faShuffle} />
      </button>

      <button className="btn btn-outline-secondary mx-1">
        <FontAwesomeIcon icon={faBackwardStep} />
      </button>

      <button
        className="btn btn-outline-secondary mx-1"
        onClick={togglePlay}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>

      <button className="btn btn-outline-secondary mx-1">
        <FontAwesomeIcon icon={faForwardStep} />
      </button>

      <button className="btn btn-outline-secondary mx-1">
        <FontAwesomeIcon icon={faRepeat} />
      </button>
    </div>
  )

  const VolumeSlider = () => (
    <div className="d-flex align-items-center ms-3" style={{ width: 120 }}>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="form-range"
      />
    </div>
  )

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      <audio
        ref={audioRef}
        src={MP3_URL}
        onLoadedMetadata={(e) => setDuration(e.target.duration || 0)}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onEnded={() => {
          setIsPlaying(false)
          setCurrentTime(duration)
        }}
      />

      <div
        className="position-fixed bottom-0 start-0 w-100 border-top bg-light"
        style={{ height: 160, padding: '50px 100px' }}
      >
        <div className="d-flex align-items-center h-100">

          <img
            src={cover}
            alt="cover"
            className="img-thumbnail me-4"
            style={{ width: 160 }}
          />

          <div className="flex-grow-1 px-5">
            <small className="text-muted">{album}</small>
            <h5 className="mb-0">{title}</h5>
            <small>{artist}</small>

            <ProgressBar />
          </div>

          <div className="d-flex align-items-center ms-4">
            <Controls />
            <VolumeSlider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Player
