const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: [
		// keep this as array as we push more entry points in dev config
		'./src/index'
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
							reloadAll: true
						},
					},
					'css-loader',
					'sass-loader',
				],
			}
		]
	},
	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx', '.css', '.scss'],
		alias: {
			'react-dom': '@hot-loader/react-dom'
		},
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[hash:8].js',
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					priority: 1
				},
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new CopyWebpackPlugin([{
			from: 'src/apache.htaccess',
			to: path.join(__dirname, 'dist') + '/.[ext]'
		}]),
		new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: process.env.NODE_ENV === 'development' ? '[name].css' : '[name].[hash].css',
			chunkFilename: process.env.NODE_ENV === 'development' ? '[id].css' : '[id].[hash].css',
		}),
	]
}
