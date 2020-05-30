const PathResolver = require("@sprucelabs/path-resolver").default;
const pathUtil = require("path");

const resolver = new PathResolver({
    enable: false,
    extensions: [".js", ".ts", ".tsx"],
    cwd: __dirname,
});

const resolverPlugin = [
    "module-resolver",
    {
        resolvePath(path, file) {
            const resolved = resolver.resolvePath(path);
            // didn't change
            if (resolved === path) {
                return false;
			}
			console.log('From', path,'\n\n','To', resolved, '\n\n\n')
            return pathUtil.relative(path, resolved);
        },
    },
];

module.exports = (api) => {
    api.cache(false);
    return {
        ignore: [
            "**/*.test.ts",
            "**/*.test.tsx",
            "**/*-story.tsx",
            "**/*.types.ts",
			// "**/build/**",
			"**/*.d.ts",
			/.*node_modules\/(?!@sprucelabs).*/gm
		],
		presets: [
			"@babel/preset-env",
			"@babel/preset-typescript",
			"@babel/preset-react",
		],
		plugins: ["./plugins/copySchema", resolverPlugin],
        // overrides: [
        //     {
		// 		exclude: function (path) {
		// 			console.log('EXCLUDE', path)
		// 			return true
		// 		},
        //     },
        // ],
    };
};
