module.exports = {
  apps: [
    {
      name: 'hello pm2',
      script: './server.js',
      instances : "max",
      exec_mode : "cluster",
      env_dev: {
        NODE_ENV: 'development',
        mode: 'dev'
      },
      env_test: {
        NODE_ENV: 'production',
        mode: 'test'
      },
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
