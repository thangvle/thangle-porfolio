module.exports = {
  reactStrictMode: true,

  build: {
    extend(config, {}) {
      config.node = {
        fs: "empty",
      };
    },
  },
};
