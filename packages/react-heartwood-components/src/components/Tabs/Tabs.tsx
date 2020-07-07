// TODO: Figure out how to split tabs up based on what's visible in the viewport
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import debounce from 'lodash/debounce'
import React, { Component, Fragment } from 'react'
import ContextMenu from '../ContextMenu/ContextMenu'
import Tab from './components/Tab/Tab'

export interface ITabsState {
	activeTabIndex: number
	contextTabWidth: number | null
	disclosureTabWidth: number[]
	hiddenTabIndices: number[]
	isContextTabVisible: boolean
	tabWidths: number[]
}

const getActiveTabIndex = (tabs: Array<SpruceSchemas.Local.ITab>) => {
	const activeTabIndex = tabs.findIndex((tab) => tab.isCurrent)
	return activeTabIndex
}

export default class Tabs extends Component<
	SpruceSchemas.Local.ITabs,
	ITabsState
> {
	public static defaultProps = {
		isPadded: true,
		isTruncatable: true,
		className: '',
	}

	public state: ITabsState = {
		activeTabIndex: getActiveTabIndex(this.props.tabs),
		contextTabWidth: null,
		disclosureTabWidth: [],
		hiddenTabIndices: [],
		isContextTabVisible: true,
		tabWidths: [],
	}

	public tabGroup: any
	public contextTab: any

	public debouncedResize = debounce(() => this.handleWindowResize(), 500)

	public componentDidMount() {
		const { isTruncatable } = this.props

		if (isTruncatable) {
			if (typeof window !== 'undefined') {
				window.addEventListener('resize', this.debouncedResize, false)
			}
		}
	}

	public componentWillUnmount() {
		const { isTruncatable } = this.props

		if (isTruncatable) {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', this.debouncedResize, false)
			}
		}
	}

	public handleWindowResize = () => {
		this.handleMeasurement()
	}

	public handleInitialMeasurement = () => {
		// Purpose: get the initial measurements for child tabs
		if (this.tabGroup) {
			const wrapper = this.tabGroup
			const wrapperWidth = wrapper.offsetWidth
			const contextTabWidth = this.contextTab.offsetWidth
			const children = wrapper.childNodes
			const childrenArray = Array.prototype.slice.call(children)
			const tabWidths: number[] = []
			childrenArray.forEach((child) => {
				if (!child.classList.contains('context-tab')) {
					tabWidths.push(child.offsetWidth)
				}
			})
			const totalTabsWidth = tabWidths.reduce((a, b) => a + b, 0)
			this.setState(
				{
					tabWidths,
					contextTabWidth,
					isContextTabVisible: totalTabsWidth > wrapperWidth,
				},
				() => this.handleMeasurement()
			)
		}
	}

	public handleMeasurement = () => {
		// TODO: Make this fire when sidebars change
		if (this.tabGroup) {
			const wrapper = this.tabGroup
			const wrapperWidth = wrapper.offsetWidth
			const contextTabWidth = this.contextTab.offsetWidth
			const { tabs } = this.props
			const { tabWidths, activeTabIndex } = this.state
			const totalTabsWidth = tabWidths.reduce((a, b) => a + b, 0)
			const hiddenTabIndices: number[] = []
			let width: number =
				activeTabIndex > -1 ? tabWidths[activeTabIndex] : tabWidths[0]

			if (wrapperWidth > totalTabsWidth) {
				this.setState({
					hiddenTabIndices: [],
					isContextTabVisible: false,
				})
			} else {
				tabs.forEach((tab, idx) => {
					if (width + contextTabWidth > wrapperWidth) {
						hiddenTabIndices.push(idx)
					}
					width += tabWidths[idx + 1]
				})
				this.setState({
					hiddenTabIndices,
					isContextTabVisible: true,
				})
			}
		}
	}

	public setRef = (ref) => {
		this.tabGroup = ref
		setTimeout(() => this.handleInitialMeasurement(), 250)
	}

	public render() {
		const { tabs, isPadded, isTruncatable, className } = this.props
		const { hiddenTabIndices, isContextTabVisible, activeTabIndex } = this.state
		const hiddenTabs: SpruceSchemas.Local.ITab[] = []
		const activeTab = tabs.find((tab) => tab.isCurrent)
		if (hiddenTabIndices.length > 0) {
			hiddenTabIndices.forEach((idx) => {
				if (idx !== activeTabIndex) {
					hiddenTabs.push(tabs[idx])
				}
			})
		}
		let tabsToShow = [...tabs]
		if (
			activeTabIndex > -1 &&
			hiddenTabIndices.length > 0 &&
			hiddenTabIndices.indexOf(activeTabIndex) > -1
		) {
			tabsToShow.splice(activeTabIndex, 1)
			tabsToShow = [tabs[activeTabIndex], ...tabsToShow]
		}

		return (
			<Fragment>
				<ul
					ref={this.setRef}
					className={cx('tab-group', className, {
						'tab-group--is-padded': isPadded,
						'tab-group--spacing-even': hiddenTabIndices.length > 0,
					})}
				>
					{tabsToShow.map((tab, idx) => {
						if (hiddenTabIndices.indexOf(idx) > -1) {
							return null
						}
						return <Tab key={tab.text} {...tab} />
					})}
					{isTruncatable && (
						<li
							ref={(ref) => (this.contextTab = ref)}
							className={cx('tab context-tab', {
								'context-tab--is-visible': isContextTabVisible,
							})}
						>
							<ContextMenu buttons={hiddenTabs} />
						</li>
					)}
				</ul>
				{activeTab && activeTab.panel}
			</Fragment>
		)
	}
}
