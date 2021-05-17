const { browserslist } = require("./package.json");

module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: browserslist,
    },
  },
};
