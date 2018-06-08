import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.babel.js';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
	performance: {
		hints: false
	},
	devServer: {
		contentBase: './dist',
		compress: true
	}
});
