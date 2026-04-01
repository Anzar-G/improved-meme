import { useState, useRef } from 'react'
import { FallingPetals } from './components/FallingPetals'
import { MusicPlayer } from './components/MusicPlayer'
import { BackgroundOrbs } from './components/BackgroundOrbs'
import { Stardust } from './components/Stardust'
import { WelcomeModal } from './components/WelcomeModal'
import { Hero } from './sections/Hero'
import { Greeting } from './sections/Greeting'
import { Footer } from './sections/Footer'
import { CONFIG } from './config'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleEnter = () => {
    // Start playing music
    if (audioRef.current) {
      audioRef.current.volume = 0
      audioRef.current.play().then(() => {
        // Fade in volume
        let vol = 0
        const step = 0.4 / 30
        const fadeInterval = setInterval(() => {
          vol += step
          if (vol >= 0.4) {
            vol = 0.4
            clearInterval(fadeInterval)
          }
          if (audioRef.current) {
            audioRef.current.volume = vol
          }
        }, 50)
      }).catch(() => { })
    }
    setShowWelcome(false)
  }

  return (
    <div className="relative min-h-screen bg-bg">
      {/* Audio element for auto-play after welcome */}
      <audio ref={audioRef} preload="auto" loop src={CONFIG.assets.music} className="hidden" />

      {/* Welcome Modal */}
      <WelcomeModal isVisible={showWelcome} onEnter={handleEnter} />

      <BackgroundOrbs />
      <Stardust />
      <FallingPetals />
      <main className="relative z-10 overflow-x-hidden">
        <Hero />
        <Greeting />
        <Footer />
      </main>
      <MusicPlayer />
    </div>
  )
}

export default App

