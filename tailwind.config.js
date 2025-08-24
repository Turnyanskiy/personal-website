/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-green-400',
    'bg-orange-400',
    'bg-violet-400',
    'bg-zinc-400',
    'text-green-400',
    'text-orange-400',
    'text-violet-400',
    'text-zinc-400',
    'hover:bg-green-400',
    'hover:bg-orange-400',
    'hover:bg-violet-400',
    'hover:bg-zinc-400',
  ],
  theme: {
    extend: {
      lineClamp: {
        10: '10',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
