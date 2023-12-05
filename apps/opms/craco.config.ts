const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: process.env.PORT,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "opms",
          exposes: {
            "./App": "./src/App",
          },
          filename: "remoteEntry.js",
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        }),
      ],
    },
    configure: (webpackConfig: any) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: "auto",
      },
    }),
  },
};
