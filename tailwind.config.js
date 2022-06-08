module.exports = {
  purge: {
    enabled: true,
    content: [
      './content/**/*.md',
      './layouts/**/*.html',
      // wherever else you use tailwind classes
    ],
  },
  prefix: '',
  important: false,
  separator: ':',
  corePlugins: {},
  plugins: [],
}
