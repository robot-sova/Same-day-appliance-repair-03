module.exports = {
    plugins: [
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.astro', './src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
        safelist: ['keep-this-class', /^dynamic-/], // Optional: Adjust as needed
      }),
    ],
  };
  