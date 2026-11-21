import { useEffect, useRef, useState } from 'react'
import { FiPlay } from 'react-icons/fi'

const VIDEO_SRC = `${import.meta.env.BASE_URL}videos/kalikha-commercial.mp4`
const POSTER_SRC = `${import.meta.env.BASE_URL}videos/kalikha-commercial-poster.jpg`

export default function VideoShowcase() {
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)

  const play = () => {
    setStarted(true)
    videoRef.current?.play()
  }

  // Pause the video when it is scrolled off screen
  useEffect(() => {
    const video = videoRef.current
    if (!video || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && !video.paused) video.pause()
    }, { threshold: 0.25 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="video-frame">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        preload="metadata"
        playsInline
        controls={started}
        onPlay={() => setStarted(true)}
        onEnded={() => setStarted(false)}
        aria-label="KALIKHA commercial"
      />
      {!started && (
        <button type="button" className="video-play" onClick={play} aria-label="Play the KALIKHA commercial">
          <span className="video-play-ring">
            <FiPlay size={30} />
          </span>
          <span className="video-play-label">Watch the commercial · 0:30</span>
        </button>
      )}
    </div>
  )
}
