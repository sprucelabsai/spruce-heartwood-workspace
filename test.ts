
const register = require('@sprucelabs/path-resolver').register
register()
require('#spruce:schema/fields/fields.types')
const imported = require('./packages/heartwood-skill/src/addons/actionField.addon')
console.log(JSON.stringify(imported.default));