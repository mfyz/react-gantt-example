const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

const config = Object.assign(baseConfig)
const { PORT } = process.env

config.mode = 'development'

config.entry.push(`webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr`)

config.output.publicPath = `http://localhost:${PORT}/`

config.devServer = {
	historyApiFallback: true
}

config.plugins.push(
	new webpack.HotModuleReplacementPlugin()
)

module.exports = config
