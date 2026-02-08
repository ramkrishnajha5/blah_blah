import { useState, useEffect, useCallback, useRef } from 'react'
import confetti from 'canvas-confetti'

// ============================================
// FLOATING HEARTS BACKGROUND COMPONENT
// ============================================
const FloatingHearts = () => {
  const hearts = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 10 + Math.random() * 10,
    size: 15 + Math.random() * 25,
    opacity: 0.3 + Math.random() * 0.4,
    emoji: ['❤️', '💕', '💖', '💗', '💓', '🌸', '✨'][Math.floor(Math.random() * 7)],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `floatUp ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  )
}

// ============================================
// FALLING FLOWERS CELEBRATION COMPONENT
// ============================================
const FallingFlowers = () => {
  const flowers = ['🌸', '🌺', '🌹', '💐', '🌷', '🏵️', '💮', '🌻', '💝', '❤️', '💕']
  const items = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    emoji: flowers[Math.floor(Math.random() * flowers.length)],
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 3,
    size: 20 + Math.random() * 35,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.left}%`,
            top: '-100px',
            fontSize: `${item.size}px`,
            animation: `fallingFlower ${item.duration}s linear forwards`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  )
}

// ============================================
// LOVE QUOTES ROTATING COMPONENT
// ============================================
const LoveQuotes = () => {
  const quotes = [
    "Love is not finding someone to live with, it's finding someone you can't live without. ❤️",
    "Every love story is beautiful, but ours will be my favorite. 💕",
    "In a sea of people, my eyes will always search for you. 👀💖",
    "You are my today and all of my tomorrows. 🌅",
    "I fell in love the way you fall asleep: slowly, then all at once. 😴💗",
    "You're the reason I believe in love. 💝",
    "My heart is, and always will be, yours. 💓",
    "You make my heart smile. 😊💖",
    "Together is my favorite place to be. 🏠❤️",
    "You are the answer to every prayer I've ever spoken. 🙏💕",
  ]

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <div className="text-center py-4 px-6 min-h-[80px] flex items-center justify-center">
      <p
        key={currentQuote}
        className="text-pink-600 italic text-sm md:text-base animate-fade-in-up"
      >
        "{quotes[currentQuote]}"
      </p>
    </div>
  )
}

// ============================================
// VIRTUAL LOVE LETTER WITH ENVELOPE ANIMATION
// ============================================
const LoveLetter = () => {
  const [stage, setStage] = useState('closed') // closed, opening, open
  const [letterIndex, setLetterIndex] = useState(0)

  const letters = [
    { title: "My First Thought Every Morning ☀️", content: "Every morning when I wake up, my first thought is of you. Your smile is the sunshine that brightens my day before the sun even rises. I hope you know that you're the most beautiful thing in my world." },
    { title: "Why You're Special 💎", content: "You're not just special because you're beautiful - though you absolutely are. You're special because of the way you make everyone around you feel loved, the way you laugh at silly things, and the way you care so deeply. You're a rare soul." },
    { title: "My Promise to You 🌹", content: "I promise to make you laugh when you're sad, to hold your hand when you're scared, to support your dreams no matter how big, and to love you more and more with each passing day. You deserve the universe, and I'll try my best to give it to you." },
    { title: "Things I Love About You 💕", content: "I love the way your eyes light up when you're happy. I love your contagious laughter. I love how passionate you are about things you care about. I love your kindness. I love everything about you, even the things you don't love about yourself." }
  ]

  const openEnvelope = () => {
    setStage('opening')
    setTimeout(() => setStage('open'), 800)
  }

  // Just change the letter - stays open
  const nextLetter = () => {
    setLetterIndex((prev) => (prev + 1) % letters.length)
  }

  return (
    <div className="glass bg-white/50 rounded-2xl p-6 md:p-8 text-center w-full">
      <h3 className="text-2xl md:text-3xl font-romantic text-pink-600 mb-4">💌 Secret Love Letters 💌</h3>
      <p className="text-gray-600 text-base mb-6">I wrote some letters just for you...</p>

      {stage === 'closed' && (
        <div className="relative mx-auto w-48 h-32 cursor-pointer hover:scale-105 transition-transform" onClick={openEnvelope}>
          {/* Envelope Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-red-200 rounded-lg shadow-lg border-2 border-pink-300">
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-4xl">💕</div>
          </div>
          {/* Envelope Flap */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-pink-300 to-pink-200 rounded-t-lg" style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }} />
          <p className="absolute -bottom-8 left-0 right-0 text-pink-500 text-sm">Click to open the envelope 💕</p>
        </div>
      )}

      {stage === 'opening' && (
        <div className="relative mx-auto w-48 h-32">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-red-200 rounded-lg shadow-lg border-2 border-pink-300" />
          {/* Flap Opening */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-pink-300 to-pink-200 rounded-t-lg envelope-flap open" style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)', transformOrigin: 'top center' }} />
          {/* Letter sliding out */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 bg-white rounded shadow-lg p-2 text-xs" style={{ animation: 'letterSlideOut 0.8s ease-out forwards' }}>
            <div className="text-pink-500">💕 A letter for you...</div>
          </div>
        </div>
      )}

      {stage === 'open' && (
        <div className="animate-fade-in-up">
          {/* Letter Counter */}
          <div className="mb-4 text-sm text-gray-500">
            Letter {letterIndex + 1} of {letters.length}
          </div>
          <div key={letterIndex} className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-6 md:p-8 mb-6 text-left border-2 border-pink-200 shadow-xl animate-fade-in-up" style={{ backgroundImage: 'repeating-linear-gradient(white, white 28px, #fce7f3 29px)' }}>
            <h4 className="font-romantic text-2xl md:text-3xl text-pink-600 mb-4">{letters[letterIndex].title}</h4>
            <p className="text-gray-700 leading-relaxed italic text-base md:text-lg">{letters[letterIndex].content}</p>
            <p className="text-right mt-6 font-romantic text-xl md:text-2xl text-pink-500">- Ram Krishna 💕</p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={nextLetter} className="btn-yes text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all">📮 Next Letter</button>
            <button onClick={() => setStage('closed')} className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all">Close Envelope 💝</button>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// FULLSCREEN COMPLIMENT SHOWER - WATER FLOAT
// ============================================
const ComplimentShowerModal = ({ onClose }) => {
  const [visibleCompliments, setVisibleCompliments] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [allShown, setAllShown] = useState(false)
  const containerRef = useRef(null)

  const compliments = [
    "Your smile could light up the darkest room 🌟",
    "You're the type of person everyone wishes they could be 👑",
    "Your kindness makes the world a better place 🌍💕",
    "You're not just beautiful, you're breathtaking ✨",
    "Every moment with you feels like magic 🪄",
    "You have the most amazing heart 💖",
    "Your laugh is my favorite sound in the world 🎵",
    "You make ordinary moments extraordinary 🌈",
    "You're like a warm hug on a cold day 🤗",
    "You deserve all the happiness in the universe 🌌",
  ]

  useEffect(() => {
    if (currentIndex < compliments.length) {
      const timer = setTimeout(() => {
        setVisibleCompliments(prev => [...prev, compliments[currentIndex]])
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === 0 ? 500 : 4000)
      return () => clearTimeout(timer)
    } else {
      setAllShown(true)
    }
  }, [currentIndex, compliments])

  // Auto-scroll to bottom when new compliment arrives
  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight
      }, 100)
    }
  }, [visibleCompliments])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-pink-900/95 via-pink-800/95 to-red-900/95 backdrop-blur-md flex flex-col">
      {/* Header */}
      <div className="text-center pt-8 pb-4 flex-shrink-0">
        <h2 className="text-3xl md:text-5xl font-romantic text-white mb-2">✨ Compliment Shower ✨</h2>
        <p className="text-pink-200 text-sm md:text-base">Watch as my thoughts about you fall from the sky...</p>
        {!allShown && <div className="text-6xl mt-4 animate-bounce">💝</div>}
      </div>

      {/* Compliments Container - Scrollable */}
      <div ref={containerRef} className="flex-1 overflow-y-auto px-4 py-4" style={{ scrollBehavior: 'smooth' }}>
        <div className="flex flex-col items-center gap-4 min-h-full justify-end">
          {visibleCompliments.map((comp, idx) => (
            <div
              key={idx}
              className="compliment-fall water-float bg-white/95 rounded-2xl px-6 py-5 shadow-2xl max-w-lg w-full text-center border-2 border-pink-300"
            >
              <p className="text-pink-700 font-semibold text-lg md:text-xl">{comp}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 px-4 flex-shrink-0">
        {allShown ? (
          <div className="animate-fade-in-up">
            <p className="text-2xl md:text-3xl font-romantic text-white mb-4">And you deserve every single one! 💕</p>
            <button onClick={onClose} className="btn-yes text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">Close 💝</button>
          </div>
        ) : (
          <button onClick={onClose} className="text-pink-300 hover:text-white transition-colors text-sm underline">Skip & Close</button>
        )}
      </div>
    </div>
  )
}

// ============================================
// COMPLIMENT GENERATOR TRIGGER COMPONENT
// ============================================
const ComplimentGenerator = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="glass bg-white/50 rounded-2xl p-6 md:p-8 text-center w-full">
        <h3 className="text-2xl md:text-3xl font-romantic text-pink-600 mb-4">✨ Compliment Shower ✨</h3>
        <p className="text-gray-600 text-base mb-6">Click to see what I think about you! Watch compliments fall from the sky...</p>

        <button
          onClick={() => setShowModal(true)}
          className="btn-yes text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
        >
          💝 Get Compliments!
        </button>
      </div>

      {showModal && <ComplimentShowerModal onClose={() => setShowModal(false)} />}
    </>
  )
}

// ============================================
// LOVE QUIZ COMPONENT
// ============================================
const LoveQuiz = () => {
  const [started, setStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const questions = [
    {
      q: "What's the most important thing in a relationship?",
      options: ["Trust & Communication", "Money", "Looks only"],
      correct: 0
    },
    {
      q: "How would I describe your smile?",
      options: ["Just okay", "Magic that brightens my whole world ✨", "Haven't noticed"],
      correct: 1
    },
    {
      q: "What do I think about when I see you?",
      options: ["Nothing special", "Random stuff", "How lucky I am 💕"],
      correct: 2
    },
    {
      q: "What would I do if you were sad?",
      options: ["Ignore it", "Hold you tight and never let go 🤗", "Tell you to cheer up"],
      correct: 1
    },
    {
      q: "How much do I love you?",
      options: ["A little", "A lot", "More than words can express 💖"],
      correct: 2
    }
  ]

  const handleAnswer = (idx) => {
    // Track correct answers properly
    const isCorrect = idx === questions[currentQ].correct

    if (currentQ < questions.length - 1) {
      if (isCorrect) {
        setScore(s => s + 1)
      }
      setCurrentQ(q => q + 1)
    } else {
      // Last question - set final score then finish
      if (isCorrect) {
        setScore(s => s + 1)
      }
      setFinished(true)
    }
  }

  const reset = () => {
    setStarted(false)
    setCurrentQ(0)
    setScore(0)
    setFinished(false)
  }

  return (
    <div className="glass bg-white/50 rounded-2xl p-6 md:p-8 text-center w-full">
      <h3 className="text-2xl md:text-3xl font-romantic text-pink-600 mb-4">💕 Love Quiz: How Well Do You Know My Heart? 💕</h3>

      {!started ? (
        <>
          <p className="text-gray-600 text-base mb-6">Take this fun quiz to see how connected we are!</p>
          <button
            onClick={() => setStarted(true)}
            className="btn-yes text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            🎮 Start Quiz!
          </button>
        </>
      ) : finished ? (
        <div className="animate-fade-in-up">
          <div className="text-7xl mb-4">{score >= 4 ? '🎉' : score >= 2 ? '💕' : '🤗'}</div>
          <p className="text-3xl font-romantic text-pink-600 mb-3">
            You scored {score}/{questions.length}!
          </p>
          <p className="text-gray-600 mb-6 text-lg">
            {score >= 4 ? "Wow! You really know my heart! We're perfect together! 💖" :
              score >= 2 ? "Pretty good! Looks like we have a great connection! 💕" :
                "Don't worry! We have a lifetime to understand each other better! 🤗"}
          </p>
          <button onClick={reset} className="bg-pink-100 text-pink-600 px-6 py-3 rounded-full font-semibold text-base">
            Play Again 🔄
          </button>
        </div>
      ) : (
        <div className="animate-fade-in-up">
          <div className="mb-3 text-base text-gray-500">Question {currentQ + 1} of {questions.length}</div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div
              className="bg-gradient-to-r from-pink-500 to-red-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-800 mb-6 font-medium">{questions[currentQ].q}</p>

          <div className="flex flex-col gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="bg-white/70 hover:bg-pink-100 text-gray-700 px-6 py-4 rounded-xl font-medium transition-all hover:scale-102 text-left text-base md:text-lg"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// REASONS I LOVE YOU COMPONENT
// ============================================
const ReasonsILoveYou = () => {
  const [revealed, setRevealed] = useState([])

  const reasons = [
    { emoji: "😊", text: "Your beautiful smile that melts my heart" },
    { emoji: "💪", text: "Your strength and determination" },
    { emoji: "🎵", text: "The way you laugh at my terrible jokes" },
    { emoji: "🌟", text: "How you light up every room you enter" },
    { emoji: "🤗", text: "Your warm and caring nature" },
    { emoji: "🦋", text: "The butterflies you give me" },
    { emoji: "🎨", text: "Your creative and unique personality" },
    { emoji: "💖", text: "Simply because you're YOU" },
  ]

  const revealNext = () => {
    if (revealed.length < reasons.length) {
      setRevealed([...revealed, revealed.length])
    }
  }

  return (
    <div className="glass bg-white/50 rounded-2xl p-6 md:p-8 text-center w-full">
      <h3 className="text-2xl md:text-3xl font-romantic text-pink-600 mb-4">💝 8 Reasons Why I Love You 💝</h3>
      <p className="text-gray-600 text-base mb-6">Click to reveal each reason...</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-4 transition-all duration-500 min-h-[100px] flex flex-col items-center justify-center ${revealed.includes(idx)
              ? 'bg-gradient-to-br from-pink-100 to-red-100 animate-fade-in-up'
              : 'bg-gray-100 cursor-pointer hover:bg-gray-200 hover:scale-105'
              }`}
            onClick={() => !revealed.includes(idx) && revealNext()}
          >
            {revealed.includes(idx) ? (
              <>
                <div className="text-4xl mb-2">{reason.emoji}</div>
                <p className="text-sm text-gray-700 text-center">{reason.text}</p>
              </>
            ) : (
              <div className="text-4xl">❓</div>
            )}
          </div>
        ))}
      </div>

      {revealed.length < reasons.length ? (
        <button
          onClick={revealNext}
          className="btn-yes text-white px-6 py-3 rounded-full font-semibold text-base"
        >
          Reveal Reason #{revealed.length + 1} 💕
        </button>
      ) : (
        <p className="text-pink-600 font-romantic text-2xl animate-heartbeat">
          And a million more reasons... I love you! 💖
        </p>
      )}
    </div>
  )
}

// ============================================
// INSTAGRAM CONNECT COMPONENT
// ============================================
const InstagramConnect = () => {
  return (
    <div className="glass bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-2xl p-6 md:p-8 text-center w-full">
      <h3 className="text-2xl md:text-3xl font-romantic text-pink-600 mb-4">📱 Let's Connect & Talk! 📱</h3>
      <p className="text-gray-600 text-base mb-6">
        Want to chat more? Find me on Instagram! 💕
      </p>

      <a
        href="https://instagram.com/ramkrishnajha5"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 
                   text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl 
                   transition-all hover:scale-105 group"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        <span>@ramkrishnajha5</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>

      <p className="text-sm text-gray-500 mt-4">
        DM me if you said YES! 😉💕
      </p>
    </div>
  )
}

// ============================================
// EMOJI RAIN EFFECT
// ============================================
const EmojiRain = ({ emoji, duration = 3000 }) => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1,
      size: 20 + Math.random() * 20,
    }))
    setParticles(newParticles)

    const timer = setTimeout(() => setParticles([]), duration)
    return () => clearTimeout(timer)
  }, [emoji, duration])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-falling-flower"
          style={{
            left: `${p.left}%`,
            top: '-50px',
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  )
}

// ============================================
// MOBILE QUESTION MODAL COMPONENT
// ============================================
const MobileQuestionModal = ({ question, questionNumber, totalQuestions, onYes, onNo, onQuit, showQuit }) => {
  const emojis = ['😢', '🥺', '😅', '👀', '💭', '😭', '💔', '🙏', '😿', '💕',
    '🤔', '😱', '🌹', '💖', '🥹', '😤', '🫠', '💗', '🦋', '✨']

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="glass bg-white/95 rounded-3xl p-6 md:p-8 max-w-md w-full text-center shadow-2xl animate-fade-in-up">
        {/* Emoji - Larger for visibility */}
        <div className="text-7xl mb-4 animate-bounce">
          {emojis[questionNumber - 1] || '😢'}
        </div>

        {/* Question - Vibrant pink/red color for visibility */}
        <p className="text-xl md:text-2xl font-semibold mb-6 font-romantic leading-relaxed"
          style={{ color: '#e91e63', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
          {question}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onYes}
            className="btn-yes text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse w-full"
          >
            💕 Say YES to be my Valentine! 💕
          </button>

          <div className="flex gap-3">
            <button
              onClick={onNo}
              className="flex-1 bg-gray-200 text-gray-700 px-4 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
            >
              Still No 😅
            </button>

            {showQuit && (
              <button
                onClick={onQuit}
                className="flex-1 bg-red-100 text-red-600 px-4 py-3 rounded-full font-semibold hover:bg-red-200 transition-all duration-300"
              >
                I Quit 🏳️
              </button>
            )}
          </div>
        </div>

        {/* Fun hint - Vibrant pink color */}
        <p className="mt-4 text-sm italic" style={{ color: '#ec407a' }}>
          {questionNumber < 10 ? "The YES button is looking really nice right now... 👀" :
            questionNumber < 15 ? "You're really making this hard on both of us! 😤" :
              "Okay okay, I respect your determination! But still... 💕"}
        </p>
      </div>
    </div>
  )
}

// ============================================
// QUIT CONFIRMATION MODAL
// ============================================
const QuitModal = ({ onStay, onYes }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="glass bg-white/95 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-fade-in-up">
        <div className="text-7xl mb-4">😭💔</div>
        <h3 className="text-2xl font-romantic text-gray-800 mb-4">
          Wait! You're leaving?
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to break my heart into a million pieces?
          I promise I'll be the best Valentine ever! 🥺
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onYes}
            className="btn-yes text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg animate-pulse"
          >
            💖 Fine, I'll be your Valentine! 💖
          </button>
          <button
            onClick={onStay}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all"
          >
            Let me think again... 🤔
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================
// BLURRED IMAGE WITH TWO-STEP REVEAL
// ============================================
const BlurredImageReveal = () => {
  const [isBlurred, setIsBlurred] = useState(true)
  const [popupStep, setPopupStep] = useState(0) // 0=none, 1=first confirm, 2=second confirm
  const [showDisclaimer, setShowDisclaimer] = useState(false) // Hidden by default

  // Show disclaimer for 4 seconds only after image is revealed
  useEffect(() => {
    if (!isBlurred) {
      setShowDisclaimer(true)
      const timer = setTimeout(() => setShowDisclaimer(false), 4000)
      return () => clearTimeout(timer)
    }
  }, [isBlurred])

  const handleRevealClick = () => {
    setPopupStep(1)
  }

  const handleFirstYes = () => {
    setPopupStep(2)
  }

  const handleSecondYes = () => {
    setPopupStep(0)
    setIsBlurred(false) // 8s smooth unblur via CSS transition
  }

  const handleNo = () => {
    setPopupStep(0)
  }

  return (
    <div className="relative mb-6">
      {/* Decorative Frame */}
      <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 rounded-2xl opacity-60 blur-sm animate-pulse"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-red-300 to-pink-300 rounded-xl opacity-40"></div>

      {/* Photo Container */}
      <div className="relative bg-white p-2 rounded-xl shadow-2xl max-w-xs mx-auto">
        <div className="relative">
          <img
            src="/proposing.png"
            alt="Ram Krishna proposing with a rose"
            className="w-full rounded-lg shadow-md"
            style={{
              objectFit: 'contain',
              maxHeight: '280px',
              filter: isBlurred ? 'blur(18px)' : 'blur(0px)',
              transition: 'filter 8s ease-out'
            }}
          />

          {/* Click to reveal overlay */}
          {isBlurred && popupStep === 0 && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer rounded-lg bg-black/20 hover:bg-black/30 transition-all"
              onClick={handleRevealClick}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg text-center">
                <p className="text-pink-600 font-semibold text-sm">🔓 Click to Reveal</p>
              </div>
            </div>
          )}
        </div>

        {/* Caption */}
        <p className="mt-2 font-romantic text-lg text-pink-600 text-center">
          {isBlurred ? "A surprise for you 🎁" : "This rose is for you 🌹"}
        </p>

        {/* AI disclaimer - shows for 4s only after reveal */}
        {showDisclaimer && (
          <p className="text-[10px] text-gray-400 italic text-center animate-fade-in-up">
            *this image is generating for you using AI
          </p>
        )}
      </div>

      {/* Floating Hearts */}
      <div className="absolute -top-2 -left-2 text-xl animate-float-heart">💕</div>
      <div className="absolute -top-2 -right-2 text-xl animate-float-heart" style={{ animationDelay: '0.5s' }}>💖</div>
      <div className="absolute -bottom-2 -left-2 text-xl animate-float-heart" style={{ animationDelay: '1s' }}>❤️</div>
      <div className="absolute -bottom-2 -right-2 text-xl animate-float-heart" style={{ animationDelay: '1.5s' }}>🌹</div>

      {/* First Confirmation Popup */}
      {popupStep === 1 && (
        <div className="mt-4 glass bg-white/95 rounded-xl p-4 text-center shadow-xl animate-fade-in-up max-w-xs mx-auto">
          <p className="text-2xl mb-2">🤔</p>
          <p className="text-lg font-romantic text-pink-600 mb-2">Are you sure?</p>
          <p className="text-gray-500 text-xs mb-3">This is something special...</p>
          <div className="flex gap-2 justify-center">
            <button onClick={handleFirstYes} className="btn-yes text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md">Yes! 💕</button>
            <button onClick={handleNo} className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-300 transition-all">No 🙈</button>
          </div>
        </div>
      )}

      {/* Second Confirmation Popup */}
      {popupStep === 2 && (
        <div className="mt-4 glass bg-white/95 rounded-xl p-4 text-center shadow-xl animate-fade-in-up max-w-xs mx-auto">
          <p className="text-2xl mb-2">👀</p>
          <p className="text-lg font-romantic text-pink-600 mb-2">You really want to see?</p>
          <p className="text-gray-500 text-xs mb-3">I'm a bit shy... 😊</p>
          <div className="flex gap-2 justify-center">
            <button onClick={handleSecondYes} className="btn-yes text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md">Yes! Show me! 💕</button>
            <button onClick={handleNo} className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-300 transition-all">No 🙈</button>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// HACKING SURPRISE ANIMATION - MOVIE STYLE
// ============================================
const HackingSurprise = ({ onComplete }) => {
  const [stage, setStage] = useState('loading') // loading, hacking, safe, done
  const [loadingPercent, setLoadingPercent] = useState(0)
  const [glitchText, setGlitchText] = useState('')

  // Scary glitch texts
  const scaryTexts = [
    'ACCESSING SYSTEM FILES...',
    'BYPASSING FIREWALL...',
    'EXTRACTING PERSONAL DATA...',
    'STEALING MEMORIES...',
    'INFILTRATING HEART.EXE...',
    'DOWNLOADING SECRETS...',
    'CRACKING ENCRYPTION...',
    'BREACHING SECURITY...',
  ]

  useEffect(() => {
    // Loading 0-100% in 3 seconds
    const loadingInterval = setInterval(() => {
      setLoadingPercent(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval)
          return 100
        }
        return prev + 2
      })
    }, 60) // 50 steps * 60ms = 3000ms

    // After 3s loading, show hacking for 7s
    const hackingTimer = setTimeout(() => setStage('hacking'), 3000)
    // After 10s total, show safe for 7s
    const safeTimer = setTimeout(() => setStage('safe'), 10000)
    // After 17s total, complete
    const doneTimer = setTimeout(() => {
      setStage('done')
      setTimeout(onComplete, 500)
    }, 17000)

    return () => {
      clearInterval(loadingInterval)
      clearTimeout(hackingTimer)
      clearTimeout(safeTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  // Cycle through scary texts
  useEffect(() => {
    if (stage === 'hacking') {
      let index = 0
      const textInterval = setInterval(() => {
        setGlitchText(scaryTexts[index % scaryTexts.length])
        index++
      }, 800)
      return () => clearInterval(textInterval)
    }
  }, [stage])

  // Generate matrix rain characters
  const generateMatrix = () => {
    const chars = '01アイウエオカキクケコサシスセソ💀☠️⚡❌🔓⚠️'
    return Array.from({ length: 80 }, () => ({
      char: chars[Math.floor(Math.random() * chars.length)],
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 1.5 + Math.random() * 2.5,
      size: 10 + Math.random() * 18,
    }))
  }

  const [matrix] = useState(generateMatrix())

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)'
      }} />

      {/* Screen flicker effect */}
      <div className="absolute inset-0 pointer-events-none animate-pulse opacity-10 bg-green-500" />

      {/* Matrix rain - only during loading and hacking */}
      {(stage === 'loading' || stage === 'hacking') && matrix.map((item, i) => (
        <div
          key={i}
          className="absolute text-green-500 font-mono opacity-70"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animation: `matrixFall ${item.duration}s linear infinite`,
            animationDelay: `${item.delay}s`,
            textShadow: '0 0 8px #00ff00, 0 0 16px #00ff00',
          }}
        >
          {item.char}
        </div>
      ))}

      {/* LOADING STAGE (0-3s) */}
      {stage === 'loading' && (
        <div className="relative z-10 text-center p-8">
          <div className="text-6xl mb-6">💀</div>
          <h1 className="text-2xl md:text-4xl font-bold text-green-500 mb-6 font-mono" style={{ textShadow: '0 0 20px #00ff00' }}>
            INITIALIZING HACK...
          </h1>

          {/* Loading bar */}
          <div className="w-64 md:w-80 h-6 bg-gray-900 border-2 border-green-500 rounded overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-green-600 via-green-400 to-green-600 transition-all duration-100"
              style={{ width: `${loadingPercent}%` }}
            />
          </div>
          <p className="text-green-400 font-mono text-2xl mt-3" style={{ textShadow: '0 0 10px #00ff00' }}>
            {loadingPercent}%
          </p>
          <p className="text-green-600 font-mono text-sm mt-2 animate-pulse">
            BREACHING SECURITY...
          </p>
        </div>
      )}

      {/* HACKING STAGE (3-10s) */}
      {stage === 'hacking' && (
        <div className="relative z-10 text-center p-8">
          {/* Glitch skull */}
          <div className="text-8xl md:text-9xl mb-4 animate-pulse relative">
            <span style={{ animation: 'glitch 0.3s infinite' }}>💀</span>
          </div>

          {/* Warning borders */}
          <div className="absolute top-4 left-4 right-4 flex justify-between text-red-500 font-mono text-sm animate-pulse">
            <span>⚠️ WARNING</span>
            <span>CRITICAL</span>
            <span>⚠️ ALERT</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-red-500 mb-4 font-mono animate-pulse"
            style={{ textShadow: '0 0 30px #ff0000, 0 0 60px #ff0000', animation: 'glitch 0.5s infinite' }}>
            YOU GOT HACKED!
          </h1>

          {/* Scary cycling text */}
          <div className="h-8 mb-4">
            <p className="text-green-400 text-lg md:text-xl font-mono" style={{ textShadow: '0 0 10px #00ff00' }}>
              {glitchText}
            </p>
          </div>

          {/* Fake file list */}
          <div className="bg-black/80 border border-green-500 rounded p-3 max-w-xs mx-auto text-left font-mono text-xs md:text-sm text-green-400 mb-4">
            <p className="animate-pulse">{'> '}accessing photos...</p>
            <p className="animate-pulse" style={{ animationDelay: '0.2s' }}>{'> '}reading messages...</p>
            <p className="animate-pulse" style={{ animationDelay: '0.4s' }}>{'> '}extracting secrets...</p>
            <p className="text-red-400 animate-pulse" style={{ animationDelay: '0.6s' }}>{'> '}FOUND: heart.exe 💔</p>
          </div>

          {/* Pulsing dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      )}

      {/* SAFE STAGE (10-17s) */}
      {stage === 'safe' && (
        <div className="relative z-10 text-center p-8 animate-fade-in-up">
          <div className="text-8xl md:text-9xl mb-6">💖</div>
          <h1 className="text-3xl md:text-5xl font-bold text-pink-400 mb-4">
            Don't worry!
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-pink-300 mb-6">
            Your device is safe...
          </h2>
          <div className="bg-pink-500/20 border-2 border-pink-400 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-2xl md:text-3xl text-pink-300 mb-2">
              That was hacked is your
            </p>
            <p className="text-5xl md:text-7xl text-red-400 font-romantic animate-heartbeat">
              HEART, cutie! 💕
            </p>
          </div>
          <p className="text-pink-300 mt-6 text-lg animate-pulse">
            ...and it now belongs to me 😘
          </p>
        </div>
      )}

      <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  )
}

// ============================================
// CELEBRATION SCREEN COMPONENT
// ============================================
const CelebrationScreen = () => {
  const [showContent, setShowContent] = useState(false)
  const [showSecondMessage, setShowSecondMessage] = useState(false)
  const [showHacking, setShowHacking] = useState(false)

  useEffect(() => {
    // Trigger confetti
    const duration = 8 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 }

    const randomInRange = (min, max) => Math.random() * (max - min) + min

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) {
        return clearInterval(interval)
      }
      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff6b9d', '#ff3366', '#dc143c', '#ff1493', '#ffd700', '#ff69b4'],
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff6b9d', '#ff3366', '#dc143c', '#ff1493', '#ffd700', '#ff69b4'],
      })
    }, 200)

    setTimeout(() => setShowContent(true), 500)
    setTimeout(() => setShowSecondMessage(true), 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-pink-200 via-pink-100 to-red-100 overflow-y-auto">
      <FallingFlowers />

      {/* Hacking Surprise Overlay */}
      {showHacking && <HackingSurprise onComplete={() => setShowHacking(false)} />}

      {/* Added pt-[100px] for 100px top margin */}
      <div className={`pt-[100px] pb-12 px-4 ${showContent ? '' : 'opacity-0'}`}>
        <div className={`text-center max-w-2xl mx-auto ${showContent ? 'animate-celebration' : ''}`}>
          {/* Celebration Hearts */}
          <div className="flex justify-center gap-3 md:gap-4 mb-6 flex-wrap">
            {['❤️', '💖', '💕', '💗', '💓', '💝', '🌹'].map((heart, i) => (
              <span
                key={i}
                className="text-3xl md:text-5xl animate-heartbeat"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {heart}
              </span>
            ))}
          </div>

          {/* Main Message */}
          <h1 className="font-romantic text-4xl md:text-6xl lg:text-7xl gradient-text mb-4 animate-rainbow">
            Yayyy! 🌸❤️
          </h1>

          <h2 className="font-romantic text-2xl md:text-4xl lg:text-5xl text-pink-600 mb-6">
            You are now officially my Valentine! 💕
          </h2>

          {/* Proposing Photo - Ram Krishna with Rose (Blurred with Reveal) */}
          <BlurredImageReveal />

          {showSecondMessage && (
            <div className="animate-fade-in-up">
              <div className="glass bg-white/70 rounded-3xl p-6 md:p-8 mb-6 shadow-xl">
                <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                  Thank you for making this the happiest Valentine's Day ever!
                  I promise to fill your days with love, laughter, and endless happiness.
                  You're not just my Valentine – you're my everything! 🌟
                </p>
                <p className="text-xl md:text-2xl text-pink-600 font-semibold">
                  Happy Valentine's Day, sweetheart! 💝
                </p>
              </div>

              {/* Surprise Button */}
              <div className="mb-6">
                <button
                  onClick={() => setShowHacking(true)}
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse"
                >
                  🎁 Click for a Surprise! 🎁
                </button>
              </div>

              {/* Instagram Connect */}
              <div className="mb-6">
                <InstagramConnect />
              </div>

              {/* Promises Section */}
              <div className="glass bg-white/50 rounded-2xl p-6 mb-6">
                <h3 className="font-romantic text-2xl text-pink-600 mb-4">My Promises to You 💫</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                  {[
                    "To make you smile every single day 😊",
                    "To be your biggest supporter always 💪",
                    "To listen when you need someone 👂",
                    "To be the reason you believe in love 💖",
                    "To give you the best hugs ever 🤗",
                    "To make every moment special with you ✨",
                  ].map((promise, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-pink-500">✓</span>
                      <span className="text-sm md:text-base">{promise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature */}
              <div className="glass bg-white/60 rounded-2xl p-6 inline-block shadow-xl mb-6">
                <p className="font-romantic text-xl md:text-2xl text-pink-700">
                  With all my love,
                </p>
                <p className="font-romantic text-3xl md:text-4xl gradient-text mt-2">
                  – Ram Krishna ❤️
                </p>
              </div>

              {/* Made with Love Footer */}
              <div className="mt-8 pt-6 border-t border-pink-200/50">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <span className="text-2xl animate-heartbeat">💝</span>
                  <p className="text-sm md:text-base font-medium">
                    Made with love for you by <span className="text-pink-600 font-semibold">Ram Krishna</span>
                  </p>
                  <span className="text-2xl animate-heartbeat" style={{ animationDelay: '0.5s' }}>💝</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Every pixel crafted with love • Valentine's 2026 💕
                </p>
              </div>
            </div>
          )}

          {/* Decorative Elements */}
          <div className="mt-6 flex justify-center gap-4 text-3xl md:text-4xl">
            <span className="animate-sparkle">✨</span>
            <span className="animate-sparkle" style={{ animationDelay: '0.3s' }}>💝</span>
            <span className="animate-sparkle" style={{ animationDelay: '0.6s' }}>🌹</span>
            <span className="animate-sparkle" style={{ animationDelay: '0.9s' }}>💝</span>
            <span className="animate-sparkle" style={{ animationDelay: '1.2s' }}>✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// HERO SECTION COMPONENT
// ============================================
const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-12 md:py-20">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-100/50 to-pink-200/30 pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Decorative Hearts */}
        <div className="flex justify-center gap-2 md:gap-3 mb-6 flex-wrap">
          {['💕', '❤️', '💖', '🌹', '💖', '❤️', '💕'].map((heart, i) => (
            <span
              key={i}
              className="text-xl md:text-3xl lg:text-4xl animate-float-heart"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {heart}
            </span>
          ))}
        </div>

        {/* Main Heading */}
        <h1 className="font-romantic text-4xl md:text-6xl lg:text-7xl gradient-text mb-4 animate-fade-in-up leading-tight">
          Hey Beautiful ❤️
        </h1>

        <h2 className="font-romantic text-3xl md:text-5xl lg:text-6xl text-pink-600 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          This is Ram Krishna
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-pink-500 font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          I made something really special just for you this Valentine's Week 💝
        </p>

        {/* Romantic Paragraph */}
        <div className="glass bg-white/60 rounded-3xl p-6 md:p-8 shadow-xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
            You know what's funny? I never believed in fairy tales until I met you.
            Every time I see your smile, my heart does this silly little dance, and I forget how to breathe for a second.
            <span className="text-pink-600 font-semibold"> You're the unexpected plot twist</span> that made my life story so much better! 🦋
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            They say good things take time, but great things happen in a heartbeat –
            and that's exactly what happened when you walked into my life.
            You're not just special; you're my <span className="text-pink-600 font-semibold">favorite kind of magic</span>. ✨💖
          </p>
        </div>

        {/* Love Quotes */}
        <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <LoveQuotes />
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 animate-bounce-gentle">
          <div className="text-pink-500 text-4xl">↓</div>
          <p className="text-pink-500 text-sm mt-1">Something special awaits below...</p>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FUN ACTIVITIES SECTION - VERTICAL LAYOUT
// ============================================
const FunActivitiesSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-romantic text-3xl md:text-5xl text-center gradient-text mb-3">
          ✨ Special Things Just For You ✨
        </h2>
        <p className="text-center text-gray-600 mb-10 text-base md:text-lg">
          I prepared some fun activities... because you deserve to feel special! 💕
        </p>

        {/* Vertical Stack - One by One (No Instagram here - only after YES) */}
        <div className="flex flex-col gap-8">
          <LoveLetter />
          <ComplimentGenerator />
          <LoveQuiz />
          <ReasonsILoveYou />
        </div>
      </div>
    </section>
  )
}

// ============================================
// PROPOSAL SECTION COMPONENT
// ============================================
const ProposalSection = ({ onAccept }) => {
  const [yesSize, setYesSize] = useState(1)
  const [noSize, setNoSize] = useState(1)
  const [noClicks, setNoClicks] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showQuitModal, setShowQuitModal] = useState(false)
  const [noDisabled, setNoDisabled] = useState(false)
  const [showEmojiRain, setShowEmojiRain] = useState(null)
  const noButtonRef = useRef(null)
  const containerRef = useRef(null)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const lastMoveTime = useRef(0)

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 20 funny/emotional questions for mobile NO clicks
  const noQuestions = [
    "Are you really sure about this? 😢",
    "Like... REALLY really sure? My heart can't take this! 💔",
    "Wait, did you even think about this properly? 🤔",
    "My heart is literally watching you right now 👀💔",
    "This button is more dangerous than you think! ⚠️😅",
    "What if this is destiny calling and you're declining the call? 📞✨",
    "I already told my mom about us... awkward! 😳",
    "But I bought chocolates and everything! 🍫💕",
    "My cat even approves of you! Don't disappoint Whiskers! 🐱",
    "One more chance? Pretty pleaseee? 🥺🙏",
    "I promise I'm house-trained and give great hugs! 🤗",
    "But who's gonna laugh at my terrible jokes now? 😭",
    "I'll let you have the last slice of pizza ALWAYS! 🍕❤️",
    "What if soulmates are real and you're just being stubborn? 💫",
    "My pillow already knows your name... 😴💕",
    "I've been practicing my movie cuddle technique! 🎬🤗",
    "Who else will appreciate your memes at 3 AM? 📱😂",
    "I'll even pretend to like your favorite show! 📺",
    "Last warning before I start crying for real 😭😭😭",
    "Okay fine... but just imagine how cute we'd be together! 💑✨",
  ]

  // Gradually increase YES button size over time
  useEffect(() => {
    const interval = setInterval(() => {
      setYesSize((prev) => Math.min(prev + 0.02, 2))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Move NO button when mouse gets close (24px buffer zone) - CONTINUOUSLY
  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e) => {
      if (!noButtonRef.current || !containerRef.current || noDisabled) return

      // Throttle to prevent too many updates (but still very responsive)
      const now = Date.now()
      if (now - lastMoveTime.current < 50) return

      const button = noButtonRef.current.getBoundingClientRect()
      const mouseX = e.clientX
      const mouseY = e.clientY

      // Get the actual button position including translation
      const buttonCenterX = button.left + button.width / 2
      const buttonCenterY = button.top + button.height / 2

      const distanceX = mouseX - buttonCenterX
      const distanceY = mouseY - buttonCenterY
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

      // Buffer zone of 24px BEFORE the button edge + some padding
      const bufferZone = 24 + Math.max(button.width, button.height) / 2 + 20

      if (distance < bufferZone) {
        lastMoveTime.current = now

        // Mouse is too close! Move the button away IMMEDIATELY
        const container = containerRef.current.getBoundingClientRect()
        const maxX = Math.min(container.width / 2 - 100, 280)
        const maxY = 200

        // Calculate direction away from mouse
        const angle = Math.atan2(distanceY, distanceX)
        const moveDistance = 150 + Math.random() * 100

        // Move in opposite direction of mouse with randomness
        let newX = noPosition.x - Math.cos(angle) * moveDistance
        let newY = noPosition.y - Math.sin(angle) * moveDistance

        // Add extra randomness to make it unpredictable
        newX += (Math.random() - 0.5) * 100
        newY += (Math.random() - 0.5) * 80

        // Keep within bounds, but if hitting edge, jump to opposite side
        if (newX > maxX) newX = -maxX + Math.random() * 50
        if (newX < -maxX) newX = maxX - Math.random() * 50
        if (newY > maxY) newY = -maxY + Math.random() * 30
        if (newY < -maxY) newY = maxY - Math.random() * 30

        setNoPosition({ x: newX, y: newY })

        // Make YES bigger and NO smaller each time
        setYesSize((prev) => Math.min(prev + 0.05, 2.5))
        setNoSize((prev) => Math.max(prev - 0.03, 0.35))

        // Show emoji rain effect occasionally
        if (Math.random() > 0.8) {
          setShowEmojiRain('💔')
          setTimeout(() => setShowEmojiRain(null), 1200)
        }
      }
    }

    // Use capture phase for faster response
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile, noPosition, noDisabled])

  // Handle NO button click on mobile
  const handleNoClick = () => {
    if (!isMobile) return
    setShowModal(true)
    setYesSize((prev) => Math.min(prev + 0.1, 2.2))
    setNoSize((prev) => Math.max(prev - 0.05, 0.6))
  }

  // Handle continuing to next question
  const handleContinueNo = () => {
    setNoClicks((prev) => prev + 1)

    if (noClicks >= noQuestions.length - 1) {
      setNoDisabled(true)
      setShowModal(false)
    }

    setShowEmojiRain('😢')
    setTimeout(() => setShowEmojiRain(null), 1500)
  }

  // Handle quit button
  const handleQuit = () => {
    setShowModal(false)
    setShowQuitModal(true)
  }

  // Handle staying after quit
  const handleStay = () => {
    setShowQuitModal(false)
    setShowModal(true)
  }

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-12"
    >
      {/* Emoji Rain Effect */}
      {showEmojiRain && <EmojiRain emoji={showEmojiRain} />}

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-200/50 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Decorative Hearts */}
        <div className="flex justify-center gap-3 md:gap-4 mb-8 flex-wrap">
          {['💗', '💖', '❤️', '🌹', '❤️', '💖', '💗'].map((heart, i) => (
            <span
              key={i}
              className="text-2xl md:text-4xl lg:text-5xl animate-heartbeat"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {heart}
            </span>
          ))}
        </div>

        {/* Proposal Question */}
        <h2 className="font-romantic text-4xl md:text-6xl lg:text-7xl gradient-text mb-4 animate-pulse-gentle leading-tight">
          So here's the big question...
        </h2>

        <h3 className="font-romantic text-3xl md:text-5xl lg:text-6xl text-pink-600 mb-4">
          Will you be my Valentine? 💖
        </h3>

        {/* Option to say no */}
        <p className="text-gray-600 text-base md:text-lg mb-6 font-semibold">
          (If you don't want to, you can click on No... but I hope you won't! 🥺)
        </p>

        {/* Fun message */}
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          ⬇️ Choose wisely! Your decision will change the universe! ⬇️
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center relative min-h-[200px]">
          {/* YES Button */}
          <button
            onClick={onAccept}
            className="btn-yes text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-bold text-xl md:text-2xl shadow-2xl 
                     hover:shadow-pink-500/50 transition-all duration-300 animate-glow touch-target"
            style={{
              transform: `scale(${yesSize})`,
              zIndex: 20,
            }}
          >
            YES! 💕
          </button>

          {/* NO Button */}
          <button
            ref={noButtonRef}
            onClick={handleNoClick}
            disabled={noDisabled}
            className={`btn-no text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-bold text-xl md:text-2xl shadow-lg 
                      touch-target
                      ${noDisabled ? 'opacity-20 cursor-not-allowed line-through' : ''}`}
            style={{
              transform: `scale(${noSize}) translate(${noPosition.x}px, ${noPosition.y}px)`,
              position: 'relative',
              transition: 'transform 0.15s ease-out',
            }}
          >
            {noDisabled ? "Can't click 🚫" : "No 😅"}
          </button>
        </div>

        {/* Hint Text */}
        <p className="mt-10 text-pink-500 text-sm md:text-base italic animate-fade-in-up">
          {isMobile
            ? noDisabled
              ? "Looks like YES is your only option now! 😏💕"
              : "Go ahead, try clicking NO... I dare you 😏"
            : noDisabled
              ? "See? You can't say no to me! 😏💕"
              : "Try to click NO if you can... good luck catching it! 😂🏃"}
        </p>

        {/* Extra decoration */}
        <div className="mt-6 flex justify-center gap-4">
          <span className="text-2xl md:text-3xl animate-sparkle">✨</span>
          <span className="text-2xl md:text-3xl animate-sparkle" style={{ animationDelay: '0.5s' }}>💝</span>
          <span className="text-2xl md:text-3xl animate-sparkle" style={{ animationDelay: '1s' }}>🌹</span>
          <span className="text-2xl md:text-3xl animate-sparkle" style={{ animationDelay: '1.5s' }}>💝</span>
          <span className="text-2xl md:text-3xl animate-sparkle" style={{ animationDelay: '2s' }}>✨</span>
        </div>
      </div>

      {/* Mobile Question Modal */}
      {showModal && !showQuitModal && (
        <MobileQuestionModal
          question={noQuestions[noClicks]}
          questionNumber={noClicks + 1}
          totalQuestions={noQuestions.length}
          onYes={onAccept}
          onNo={handleContinueNo}
          onQuit={handleQuit}
          showQuit={noClicks >= 3}
        />
      )}

      {/* Quit Confirmation Modal */}
      {showQuitModal && (
        <QuitModal
          onStay={handleStay}
          onYes={onAccept}
        />
      )}
    </section>
  )
}

// ============================================
// FOOTER COMPONENT
// ============================================
const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center bg-gradient-to-t from-pink-200/50 to-transparent">
      <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
        <span className="text-xl animate-heartbeat">💝</span>
        <p className="text-sm md:text-base font-medium">
          Made with love for you by <span className="text-pink-600 font-bold font-romantic text-lg">Ram Krishna</span>
        </p>
        <span className="text-xl animate-heartbeat" style={{ animationDelay: '0.5s' }}>💝</span>
      </div>
      <p className="text-xs text-gray-400">
        Every pixel crafted with love • Valentine's 2026 💕
      </p>
    </footer>
  )
}

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  const [accepted, setAccepted] = useState(false)

  const handleAccept = () => {
    setAccepted(true)
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Main Content */}
      {!accepted ? (
        <>
          <HeroSection />
          <FunActivitiesSection />
          <ProposalSection onAccept={handleAccept} />
          <Footer />
        </>
      ) : (
        <CelebrationScreen />
      )}
    </div>
  )
}

export default App
