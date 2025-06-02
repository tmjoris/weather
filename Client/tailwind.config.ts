import type {Config} from 'tailwindcss'

const config: Config = {
    content: ['./pages/**/*.{.ts,tsx}', './components/**/*.{ts, tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('rippleui')],
}
export default config