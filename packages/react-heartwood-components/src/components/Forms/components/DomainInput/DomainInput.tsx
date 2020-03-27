// TODO: May be better as a stateful component in order to trim itself
import React from 'react'
import TextInput from '../TextInput/TextInput'

interface IDomainInputProps {
	/** Unique identifier */
	id: string
}

const DomainInput = (props: IDomainInputProps) => {
	const { id, ...rest } = props
	return <TextInput id={id} {...rest} />
}

export default DomainInput