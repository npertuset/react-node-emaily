// keys.js - figure out what set of creentials to return
if (process.env.NODE_EV === 'production') {
  // we are in production - return prod keys
  module.exports = require('./prod');
} else {
  // we are in development - return dev keys
  module.exports = require('./dev');
}
