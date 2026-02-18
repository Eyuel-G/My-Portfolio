/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // slate-900 - deep blue-black
        secondary: '#3b82f6', // blue-500 - vibrant blue
        tertiary: '#1e3a8a', // blue-800 - deep blue
        'black-100': '#1e293b', // slate-800
        'black-200': '#0f172a', // slate-900
        'white-100': '#f8fafc', // slate-50
        flashWhite: '#f1f5f9', // slate-100
        platinum: '#e2e8f0', // slate-200
        platinumLight: '#f1f5f9', // slate-100
        timberWolf: '#cbd5e1', // slate-300
        taupe: '#64748b', // slate-500
        silver: '#94a3b8', // slate-400
        dim: '#475569', // slate-600
        battleGray: '#64748b', // slate-500
        french: '#94a3b8', // slate-400
        night: '#020617', // slate-950
        jet: '#1e293b', // slate-800
        jetLight: '#334155', // slate-700
        jetGray: '#475569', // slate-600
        richBlack: '#1e293b', // slate-800
        eerieBlack: '#0f172a', // slate-900
        onyx: '#475569', // slate-600
        // New blue accent colors
        blueAccent: '#3b82f6', // blue-500
        blueLight: '#60a5fa', // blue-400
        blueDark: '#1d4ed8', // blue-700
        blueDeep: '#1e3a8a', // blue-800
        skyBlue: '#0ea5e9', // sky-500
        skyLight: '#38bdf8', // sky-400
      },
      boxShadow: {
        card: '0px 35px 120px -15px #1e3a8a',
        cardLight: '0px 19px 38px #3b82f6, 0px 15px 12px #60a5fa',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about:
          'linear-gradient(165deg, rgba(59,130,246,0.1) 0%, rgba(30,58,138,0.2) 100%)',
        experience:
          "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(15,23,42,0.8) 100%), url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight:
          'linear-gradient(137deg, rgba(59,130,246,0.05) 0%, rgba(15,23,42,0.9) 100%)',
        hero: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(15,23,42,0.95) 100%)',
        'hero-mobile':
          'linear-gradient(137deg, rgba(59,130,246,0.1) 0%, rgba(15,23,42,1) 100%)',
        tech: "linear-gradient(165deg, rgba(30,58,138,0.8) 0%, rgba(59,130,246,0.6) 100%), url('/src/assets/backgrounds/nairobi.png')",
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
