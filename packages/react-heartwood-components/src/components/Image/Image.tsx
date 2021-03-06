import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import React from 'react'

const Image = (props: SpruceSchemas.Local.IImage): React.ReactElement => {
	const { id, alt, src, width, height } = props
	const imageProps = {
		id: id || undefined,
		alt: alt || undefined,
		width: width || undefined,
		height: height || undefined,
		src: src || undefined
	}

	return <img {...imageProps} />
}

export default Image
