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
            return pathUtil.relative(path, resolved);
        },
    },
];

module.exports = (api) => {
    // console.log(process.env)
    // throw new Error(process.env)
    api.cache(false);
    return {
        ignore: [
            "**/*.test.ts",
            "**/*.test.tsx",
            "**/*.types.ts",
            "**/*.d.ts",
            /.*\-story\.tsx/i,
            /.*node_modules\/(?!@sprucelabs).*/gi,
        ],
        presets: [
            "@babel/preset-env",
            "@babel/preset-typescript",
            "@babel/preset-react",
        ],
        plugins: [
            "./babel-plugins/copySchema",
            resolverPlugin,
            "@babel/plugin-transform-runtime",
        ],
        overrides: [
            {
                test: /\.tsx/gi,
                plugins: ["@babel/plugin-proposal-class-properties"],
            },
        ],
    };
};
