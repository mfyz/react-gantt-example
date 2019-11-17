const baseConfig = require('./webpack.config.base')

const config = Object.assign(baseConfig)

config.mode = 'production'

config.plugins.push(
	// prod plugins here...
)

module.exports = config
