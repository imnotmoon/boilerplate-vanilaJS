const path = require("path");

// plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const date = Date.now();

module.exports = {
	entry: {
		index: "./index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: `[name]_${date}_bundle.js`,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: "pre",
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
			filename: "./index.html",
			chunks: ["index"],
		}),
	],
	devtool: "inline-source-map",
};
