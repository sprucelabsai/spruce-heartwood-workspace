const PathResolver = require("@sprucelabs/path-resolver").default;
const pathUtil = require("path");
const copySchema = require("./babel-plugins/copySchema")

const resolver = new PathResolver({
	enable: false,
	extensions: [".js", ".ts", ".tsx"],
	cwd: __dirname,
});

copySchema({
	resolver: resolver,
	cwd: __dirname,
	heartwoodSkill: pathUtil.resolve(__dirname, 'packages', 'heartwood-skill')
})


const resolverPlugin = [
	"module-resolver",
	{
		resolvePath(path, file) {
			var candidates = resolver.generateCandidates(path);
			// didn't change
			if (candidates.length === 0) {
				return false;
			}

			// resolver.compilerOptions.outDir = false
			const resolved = resolver.resolvePath(path)

			// if parsing schema module, process differently
			var isSchemaModule = file.search('@sprucelabs') > -1
			var assumed = isSchemaModule ? candidates[4] : candidates[4]

			// if (isSchemaModule) {
			// 	console.log('*************************')
			// 	console.log(path)
			// 	console.log(file)
			// 	console.log('candidates', candidates)
			// 	console.log('*************************')
			// 	throw new Error('isSchemaModules')
			// }


			var ext = pathUtil.extname(assumed)

			// remove extension
			assumed = assumed.substr(0, assumed.length - ext.length)

			// make relative
			assumed = './' + pathUtil.relative(pathUtil.dirname(file), assumed)

			console.log('***********************************')
			console.log('this path', path)
			console.log('')
			console.log('from this file', file)
			console.log('')
			console.log('should look like this', assumed)
			console.log('')
			console.log('based on these')
			console.log(candidates)
			console.log('***********************************')

			// throw new Error('test')
			return assumed
		},
	},
];

module.exports = (api) => {
	api.cache(false);

	return {
		presets: [
			"@babel/preset-env",
			[
				"@babel/preset-react",
				{
					development: process.env.BABEL_ENV !== "build",
				},
			],
			["@babel/preset-typescript", {
				allowNamespaces: true
			}],
		],
		plugins: [
			resolverPlugin,
			"@babel/plugin-transform-runtime",
			["@babel/plugin-proposal-decorators", {
				decoratorsBeforeExport: false
			}],
			"@babel/plugin-proposal-class-properties",
		],
		env: {
			build: {
				ignore: [
					"**/*.test.8ts",
					"**/*.test.tsx",
					// "**/*.types.ts",
					"**/*.d.ts",
					/.*\-story\.tsx/i,
					/.*node_modules\/(?!@sprucelabs).*/gi,
					/heartwood\-skill\/src\/schemas/gi,
					/\.types\.ts/gi,
					'.vscode',
					/.*\.md/gi
				],
			},
		},
		ignore: [
			"**/*.d.ts",
			/.*node_modules\/(?!@sprucelabs).*/gi,
			/heartwood\-skill\/src\/schemas/gi,
			// /\.types\.ts/gi,
			'.vscode',
			/.*\.md/gi,
			/.*\.log/gi,
			/.*\.lock/gi,
		],
	};
};
