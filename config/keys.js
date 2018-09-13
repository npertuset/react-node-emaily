// keys.js - figure out what set of creentials to return
if (process.env.NODE_EV === 'production') {
  // we are in production - return prod keys
  modules.exports = require('./prod');
} else {
  // we are in development - return dev keys
  modules.exports = require('./dev');
}
