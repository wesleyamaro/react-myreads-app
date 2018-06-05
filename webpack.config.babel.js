import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: __dirname + '/public/index.html' });

export default {
	entry: ['babel-polyfill', './src/index.jsx'],
	output: {
		path: resolve(__dirname, '/public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	stats: {
		colors: true,
		reasons: true
	},
	module: {
		rules: [{
			test: /\.(sass|scss|css)$/i,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: ['babel-loader']
		}, {
			test: /\.(ttf|eot|woff|woff2)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8000, // Convert images < 8kb to base64 strings
					name: '/assets/fonts/[hash]-[name].[ext]'
				}
			}]
		},{
			test: /\.(png|jp(e*)g|svg)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8000, // Convert images < 8kb to base64 strings
					name: '/assets/images/[hash]-[name].[ext]'
				}
			}]
		}]
	},
	plugins: [
		HTMLWebpackPluginConfig
	],
	devServer: {
		contentBase: './public',
		compress: true,
		port: 8081,
		watchContentBase: true,
		clientLogLevel: 'error',
		historyApiFallback: true
	},
};
