import merge from 'webpack-merge';
import common from './webpack.config.babel.js';

export default merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './public',
		compress: true,
		port: 8081,
		watchContentBase: true,
		clientLogLevel: 'error',
		historyApiFallback: true
	}
});
