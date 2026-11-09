// Runs Tailwind CSS v4 on src/app/globals.css during `next dev` and `next build`.
// Without this file, @theme / @apply are left unprocessed and the site has no styling.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
