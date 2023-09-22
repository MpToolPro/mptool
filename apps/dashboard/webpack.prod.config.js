const config = require('./module-federation.config');
module.exports = {
  ...config,
  remotes: [
    ['todo', 'https://inspiring-starship-933c53.netlify.app/'],
    ['login', 'https://tiny-kulfi-b37ea4.netlify.app/'],
  ],
};
