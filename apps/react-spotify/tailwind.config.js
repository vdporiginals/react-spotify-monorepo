const { join } = require('path');

function guessProductionMode() {
  const argv = process.argv.join(' ').toLowerCase();
  const isProdEnv = process.env.NODE_ENV === 'production';
  return isProdEnv || [' build', ':build', 'nx build'].some(command => argv.includes(command));
}

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';
// console.log(process.env.TAILWIND_MODE);
module.exports = {
  mode: 'jit',
  presets: [require('../../tailwind-workspace-preset.js')],
  purge: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};

