export type NoNulls<T> = T extends {}
	? { [K in keyof T]: Exclude<T[K], null> }
	: Exclude<T, null>

export default function stripNulls<T extends {}>(
	options: T | null | undefined
): NoNulls<T> {
	const cleaned: Partial<T> = {}
	Object.keys(options || {}).forEach((key) => {
		// @ts-ignore
		if (options[key] !== null) {
			// @ts-ignore
			cleaned[key] = options[key]
		}
	})
	return cleaned as NoNulls<T>
}
