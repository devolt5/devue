const app = require('express')()

// Do not use any subpath, paths are configured in nuxt.config.js
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({"hello": "world"});
})

module.exports = app
