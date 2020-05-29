const PathResolver = require('@sprucelabs/path-resolver').default

const resolver = new PathResolver({
	enable: false,
	cwd: '/Users/taylorromero/Development/SpruceLabs/spruce-heartwood-workspace/'
})

const config = {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    "ignore": ["**/*.test.ts"],
    "plugins": [
		["@babel/plugin-transform-typescript", {allowNamespaces: true}],
        [
			'module-resolver', {
				resolvePath(path) {
					return resolver.resolvePath(path)
				}
			}
        ]
    ]
}

require("@babel/register")(config)