import React from 'react'

interface IImageSSRProps {
	id: string
	src: string
	alt: string
	className: string
	width: number
	height: number
}

// This component returns a wrapped img element that will handle image sources that fail to load.
// Regular JSX <img /> tag onError event does not work correctly with SSR so
// this component is used as a workaround.

const ImageSSR = (props: IImageSSRProps) => {
	const { className, alt, src, width, height, id } = props
	return (
		<div
			className="image-wrapper"
			dangerouslySetInnerHTML={{
				__html: `
					<img class=${className} alt=${alt} id=${id} src="${src}"
					onerror="this.onerror=null;this.classList.add('error');"
					width=${width}
					height=${height}
					/>
				`
			}}
		/>
	)
}

export default ImageSSR
