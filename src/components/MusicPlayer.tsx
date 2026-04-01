import { useRef, useState } from 'react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.volume = 0.4
      audio.play().catch(() => {})
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio
        ref={audioRef}
        preload="auto"
        loop
        src="/bgm.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="hidden"
      />
      <div
        className="fixed z-40 flex items-center gap-2"
        style={{
          bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
          right: 'max(1.5rem, env(safe-area-inset-right))',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip — sembunyikan di touch device biar nggak numpuk */}
        {isHovered && (
          <span
            className="absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded text-[0.75rem] font-lora italic text-[#fef6ee] border border-[rgba(255,176,136,0.25)] bg-[rgba(15,11,30,0.85)] backdrop-blur-sm transition-opacity duration-300 hidden sm:block"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            {isPlaying ? 'Now Playing' : 'Play Music'}
          </span>
        )}

        {/* Equalizer bars - only when playing, sembunyikan di mobile biar nggak ramai */}
        {isPlaying && (
          <div className="hidden sm:flex items-end gap-1 h-5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-[rgba(255,176,136,0.5)]"
                style={{
                  height: '10px',
                  animation: `equalizer-bar ${1.2 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Main button — min 44px touch target di mobile */}
        <button
          type="button"
          onClick={togglePlay}
          className="relative flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[rgba(15,11,30,0.75)] backdrop-blur-md border border-[rgba(255,176,136,0.25)] text-[#fef6ee] cursor-pointer transition-all duration-300 ease-out hover:border-[rgba(255,176,136,0.5)] hover:shadow-[0_0_12px_rgba(255,176,136,0.15)]"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {/* Animated ring when playing */}
          {isPlaying && (
            <svg
              className="absolute inset-0 w-full h-full rounded-full -rotate-90"
              style={{ animation: 'ring-rotate 3s linear infinite' }}
            >
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="rgba(255,176,136,0.35)"
                strokeWidth="1.5"
                strokeDasharray="60 120"
              />
            </svg>
          )}
          {isPlaying ? (
            <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 relative z-10 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </>
  )
}
