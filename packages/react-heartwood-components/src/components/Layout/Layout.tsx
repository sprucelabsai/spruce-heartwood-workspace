import cx from 'classnames'
import React from 'react'
import {ILayout} from '@sprucelabs/heartwood-skill'
import LayoutSection from './components/LayoutSection/LayoutSection'

const Layout = (props: ILayout) => {
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
				sections.map((section) => (
					<LayoutSection key={section.id} {...section} />
				))}
		</div>
	)
}

Layout.Section = LayoutSection

Layout.defaultProps = {
	isCentered: false,
	width: 'base',
	isFullBleed: false
} as Partial<ILayout>

export default Layout
