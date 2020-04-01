import React, { Component } from 'react'
import FontFaceObserver from 'fontfaceobserver'
import Helmet from 'react-helmet'

type LoadResult = {
	name: string
	loaded: boolean
}

export interface IFont {
	name: string
	weight: string
	style: string
	link: {
		href: string
	}
}

interface IFontLoaderProps {
	/** Fonts that need to be loaded */
	fonts: IFont[]
}
interface IFrontLoaderState {
	/** Results of font loading attempts */
	results: Array<LoadResult>
}

export default class FontLoader extends Component<
	IFontLoaderProps,
	IFrontLoaderState
> {
	public state = {
		results: []
	}

	public async componentDidMount() {
		const { fonts } = this.props
		const fontsToObserve: Promise<void>[] = []

		if (typeof document !== 'undefined') {
			document.body.classList.add('fonts-loading')
		}

		fonts.forEach(font => {
			// Define each font to load
			const { name, weight, style } = font
			const fontToObserve = new FontFaceObserver(name, {
				weight,
				style
			})

			// Add font to array
			fontsToObserve.push(fontToObserve.load())
		})

		// Load all the fonts
		Promise.all(fontsToObserve)
			.then(fonts => {
				console.log('Fonts loaded: ', fonts)
			})
			.catch(err => {
				console.error(err)
			})
			.finally(() => {
				// Show me the fonts!
				if (typeof document !== 'undefined') {
					document.body.classList.remove('fonts-loading')
					document.body.classList.add('fonts-loaded')
				}
			})
	}

	public render() {
		const { fonts } = this.props

		if (fonts.some(font => font.link)) {
			return (
				<Helmet>
					{fonts.map(font => (
						<link key={font.link.href} {...font.link} />
					))}
				</Helmet>
			)
		}
		return null
	}
}
