/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                romantic: ['Dancing Script', 'cursive'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                pink: {
                    light: '#ffe4ec',
                    medium: '#ff6b9d',
                    dark: '#ff3366',
                },
                heart: '#ff1493',
                deep: '#dc143c',
            },
            animation: {
                'float-heart': 'floatHeart 3s ease-in-out infinite',
                'float-up': 'floatUp 15s linear infinite',
                'pulse-gentle': 'pulse 2s ease-in-out infinite',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'shake': 'shake 0.5s ease-in-out',
                'celebration': 'celebration 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'bounce-gentle': 'bounce 2s ease-in-out infinite',
                'sparkle': 'sparkle 1s ease-in-out infinite',
                'falling-flower': 'fallingFlower 4s linear forwards',
                'rainbow': 'rainbowGlow 3s linear infinite',
            },
            keyframes: {
                floatHeart: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.7' },
                    '25%': { transform: 'translateY(-20px) rotate(5deg)', opacity: '1' },
                    '50%': { transform: 'translateY(-40px) rotate(-5deg)', opacity: '0.8' },
                    '75%': { transform: 'translateY(-20px) rotate(3deg)', opacity: '0.9' },
                },
                floatUp: {
                    '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
                },
                pulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '14%': { transform: 'scale(1.1)' },
                    '28%': { transform: 'scale(1)' },
                    '42%': { transform: 'scale(1.1)' },
                    '70%': { transform: 'scale(1)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 105, 180, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 20, 147, 0.8), 0 0 60px rgba(255, 105, 180, 0.6)' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
                    '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
                },
                celebration: {
                    '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
                    '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
                    '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                bounce: {
                    '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0, 0, 0)' },
                    '40%, 43%': { transform: 'translate3d(0, -15px, 0)' },
                    '70%': { transform: 'translate3d(0, -7px, 0)' },
                    '90%': { transform: 'translate3d(0, -2px, 0)' },
                },
                sparkle: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.5', transform: 'scale(0.8)' },
                },
                fallingFlower: {
                    '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
                },
                rainbowGlow: {
                    '0%': { filter: 'hue-rotate(0deg)' },
                    '100%': { filter: 'hue-rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
}
