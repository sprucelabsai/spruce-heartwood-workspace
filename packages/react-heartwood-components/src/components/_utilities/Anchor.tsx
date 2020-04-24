import React from 'react'
export interface IBasicAnchorProps {
	 className?: string, 
	 children?: React.ReactNode, 
	 href?: string, 
	 target?: string, 
	 onClick :any
}
const BasicAnchor = (props: IBasicAnchorProps) => (
	<a className={props.className} href={props.href} target={props.target} onClick={props.onClick}>
		{props.children}
	</a>
)

export default BasicAnchor
