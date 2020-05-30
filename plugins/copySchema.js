const pathUtil = require("path");
const fs = require("fs");
const fsExtra = require("fs-extra");
const PathResolver = require("@sprucelabs/path-resolver").default;

module.exports = function (api) {
	return {
		pre: function (state) {

			const resolver = new PathResolver({
				enable: false,
				extensions: [".js", ".ts", ".tsx"],
				cwd: state.opts.cwd,
			});

			// places to look for schema
			const rootTarget = pathUtil.join(
				state.opts.root,
				"node_modules",
				"@sprucelabs",
				"schema"
			);

			const destination = pathUtil.join(
				state.opts.cwd,
				"node_modules",
				"@sprucelabs",
				"schema"
			);

			// step 1, make sure it exists at the destination
			if (!fs.existsSync(destination)) {
				fsExtra.copySync(rootTarget, destination);
			}

			// step 2, path replacement?
			// const source = pathUtil.join(destination, 'build', '**', '*.js')
			// const resolved = resolver.resolvePath('#spruce/schemas')

			// console.log('resolved', resolved)
			// throw new Error('raoesuthaoeu')

			// const results = replace.sync({
			// 	files: source,
			// 	from: '#spruce/schemas',
			// 	to: 
			//   });
			   
		},
	};
};
