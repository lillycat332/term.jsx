import React from 'react';
import Box from './Box';
import styles from './buttons.module.css';

export type TerminalProps = {
	children?: React.ReactNode
	style?: React.CSSProperties
	className?: string
	windowDecoration?: boolean
}

const macosWindowDecoration = () => {
	return (
		<>
			<div className={[styles['base-circle'], styles['close-circle']].join(' ')}></div>
			<div className='base-circle min-circle'></div>
			<div className='base-circle max-circle'></div>
		</>
	)
}

export function Terminal(props: TerminalProps) {
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
