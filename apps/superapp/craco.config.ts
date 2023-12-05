const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "superapp",
          remotes: {
            edxpert: "edxpert@http://localhost:4000/remoteEntry.js",
            mdm: "mdm@http://localhost:4001/remoteEntry.js",
            opms: "opms@http://localhost:4002/remoteEntry.js",
            superapp: "superapp@http://localhost:4003/remoteEntry.js",
            ui: "ui@http://localhost:4004/remoteEntry.js",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        }),
      ],
    },
  },
};
