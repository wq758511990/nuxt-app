module.exports = {
  apps: [
    {
      name: "czblog",
      // 指定解释器
      // interpreter: './node_modules/.bin/ts-node',
      port: 8080,
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
