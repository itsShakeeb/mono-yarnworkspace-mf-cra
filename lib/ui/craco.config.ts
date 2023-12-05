const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: process.env.PORT,
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "ui",
          exposes: {
            "./button": "./src/component/Button",
          },
          remotes: {
            ui: "ui@http://localhost:4004/remoteEntry.js",
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
