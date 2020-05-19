import cx from 'classnames'
import React from 'react'
import LayoutSection from './components/LayoutSection/LayoutSection'
import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'

const Layout = (props: SpruceSchemas.Local.ILayout) => {
	const {
		children,
		isCentered,
		isFullBleed,
		width,
		className,
		sections
	} = props

	return (
		<div
			className={cx('layout', className, {
				'layout--centered': isCentered,
				'layout--wide': width === 'wide',
				'layout--tight': width === 'tight',
				'layout--full-width': width === 'fullWidth',
				'layout--full-bleed': isFullBleed
			})}
		>
			{children}
			{sections &&
				sections.map(section => (
					<LayoutSection key={section.id ?? undefined} {...section} />
				))}
		</div>
	)
}

Layout.Section = LayoutSection
Layout.defaultProps = {} // DefaultProps(SpruceSchemas.Local.Layout.definition)

export default Layout
