const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const inputDir = './src';
const outputDir =  './dist';

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		'main': [
			`${inputDir}/js/main.js`,
			`${inputDir}/scss/main.scss`,
			`webpack-hot-middleware/client`
		],
	},
	output: {
		path: path.resolve(__dirname, outputDir),
		filename: `./js/[name].js`,
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			// this will apply to both plain `.js` files
			// AND `<script>` blocks in `.vue` files
			{
				test: /\.js$/,
				exclude: /node_modules/,
			},
			// this will apply to both plain `.css` files
			// AND `<style>` blocks in `.vue` files
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
			{
				loader: 'sass-loader',
				options: {
					//Prepends Sass/SCSS code before the actual entry file.
					additionalData: `
                @import "${inputDir}/scss/variables.scss";
              `
				},
			},
		]
	},
]
},
resolve: {
	alias: {
		'vue$': 'vue/dist/vue.esm.js',
	},
	extensions: ['*', '.js', '.vue', '.json'],
},
plugins: [
	new VueLoaderPlugin(),
	new MiniCssExtractPlugin({
		filename: `./css/[name].css`,
	}),
	new CopyPlugin({
		patterns: [
			{ from: `${inputDir}/index.html`, to: 'index.html' },
		],
	}),
	new webpack.HotModuleReplacementPlugin()
],
};