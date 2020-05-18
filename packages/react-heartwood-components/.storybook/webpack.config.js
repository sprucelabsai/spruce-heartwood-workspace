// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const override = {
	plugins: [
		// your custom plugins
		new MiniCssExtractPlugin('style.css'),
		new webpack.DefinePlugin({
			'process.env': {
				STYLESHEETS: JSON.stringify(process.env.STYLESHEETS)
			}
		})
	],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'#spruce': path.resolve(__dirname, '../../heartwood-skill/build/.spruce'),
			'#spruce:schema': path.resolve(__dirname, '../../heartwood-skill/build/.spruce/schemas')
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: [
					{
						loader: require.resolve('babel-loader'),
						options: {
							// "presets": [["react-app", { "flow": false, "typescript": true }]]
							"presets": [
								"@babel/preset-env",
								"@babel/preset-react",
								[
									"@babel/preset-typescript",
									{
										"allowNamespaces": true
									}
								]
							],
							"plugins": [
								"@babel/plugin-transform-runtime",
								"@babel/plugin-proposal-object-rest-spread",
								"@babel/plugin-transform-flow-strip-types",
								"@babel/plugin-syntax-dynamic-import",
								"@babel/plugin-syntax-import-meta",
								"@babel/plugin-proposal-class-properties",
								"@babel/plugin-proposal-json-strings",
								[
									"@babel/plugin-proposal-decorators",
									{
										"legacy": true
									}
								],
								"@babel/plugin-proposal-function-sent",
								"@babel/plugin-proposal-export-namespace-from",
								"@babel/plugin-proposal-numeric-separator",
								"@babel/plugin-proposal-throw-expressions",
								"@babel/plugin-proposal-export-default-from",
								"@babel/plugin-proposal-logical-assignment-operators",
								"@babel/plugin-proposal-optional-chaining",
								[
									"@babel/plugin-proposal-pipeline-operator",
									{
										"proposal": "minimal"
									}
								],
								"@babel/plugin-proposal-nullish-coalescing-operator",
								"@babel/plugin-proposal-do-expressions",
								"@babel/plugin-proposal-function-bind",
								[
									"inline-react-svg",
									{
										"svgo": {
											"plugins": [
												{
													"removeAttrs": {
														"attrs": [
															"stroke",
															"fill"
														]
													}
												}
											]
										}
									}
								]
							],
							"ignore": [
								"node_modules"
							]
						}
					},
					require.resolve('react-docgen-typescript-loader')
				]
			},
			{
				test: /\.s(a|c)ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /.*\.(gif|png|jpe?g)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							hash: 'sha512',
							digest: 'hex',
							name: '[hash].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						query: {
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							mozjpeg: {
								quality: 65
							},
							gifsicle: {
								interlaced: false
							},
							optipng: {
								optimizationLevel: 4
							}
						}
					}
				]
			}
		]
	},

}

module.exports = async ({ config, mode }) => {
	config.plugins = [...config.plugins, ...override.plugins]
	config.resolve.extensions = [
		...config.resolve.extensions,
		...override.resolve.extensions
	]
	config.module.rules = [...config.module.rules, ...override.module.rules]
	return {
		...config,
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			alias: {
				'#spruce': path.resolve(__dirname, '../../heartwood-skill/.spruce'),
				'#spruce:schema': path.resolve(__dirname, '../../heartwood-skill/.spruce/schemas')
			},
		},
		node: {
			fs: 'empty',
			module: 'empty'
		}
	}
}
