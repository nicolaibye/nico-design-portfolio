const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of the application
  output: {
    filename: "bundle.js", // Name of the output file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};
