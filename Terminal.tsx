import React from 'react';
import Box from './Box';
import './buttons.css';

type TerminalProps = {
	children: React.ReactNode
	style?: React.CSSProperties
	className?: string
	windowDecoration?: boolean
}

const macosWindowDecoration = () => {
	return (
		<>
			<div className='base-circle close-circle'></div>
			<div className='base-circle min-circle'></div>
			<div className='base-circle max-circle'></div>
		</>
	)
}

const Terminal: React.FunctionComponent<TerminalProps> = (props: TerminalProps) => {
	const { children, style, className, windowDecoration } = props;

	return (
		<div className={className ?? "code"}>
			<Box style={style}>
				{windowDecoration && macosWindowDecoration()}
				{children}
			</Box>
		</div >
	);
}

export default Terminal;