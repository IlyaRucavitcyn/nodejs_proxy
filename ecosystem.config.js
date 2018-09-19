module.exports = {
  apps: [
    {
      name: "proxy",
      script: "npm start",
      watch: ["index.js", "package.json", "ecosystem.config.json"],
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
