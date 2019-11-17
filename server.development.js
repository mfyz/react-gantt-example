/* eslint-disable import/no-extraneous-dependencies */

// require('dotenv').config()

const webpack = require('webpack')
const path = require('path')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const app = require('./server.base')
const config = require('./webpack.config.development')

const { PORT } = process.env

const compiler = webpack(config)

app.use(webpackMiddleware(compiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res, next) => {
	const filename = path.join(compiler.outputPath, 'index.html')
	compiler.outputFileSystem.readFile(filename, (err, result) => {
		if (err) return next(err)
		res.set('content-type', 'text/html')
		res.send(result)
		res.end()
	})
})

app.listen(PORT, () => {
	console.log(`App (dev) listening on http://localhost:${PORT}`)
})
