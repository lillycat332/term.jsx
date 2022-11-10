import React from 'react';
import Box from './Box';
import styles from './buttons.module.css';

export type TerminalProps = {
	children?: React.ReactNode
	style?: React.CSSProperties
	className?: string
	windowDecoration?: boolean
	title?: string
}

const defaultStyle = {
	borderRadius: 8,
	minHeight: "40vh",
	padding: 12,
	minWidth: "50vw",
	marginTop: "5%",
	boxShadow: `
  0 1px 1px rgba(0,0,0,0.11), 
	0 2px 2px rgba(0,0,0,0.11), 
	0 4px 4px rgba(0,0,0,0.11), 
	0 8px 8px rgba(0,0,0,0.11), 
	0 16px 16px rgba(0,0,0,0.11), 
	0 32px 32px rgba(0,0,0,0.11)`,
}

// const macosWindowDecoration = () => {
// 	return (
// 		<div className={styles['button-padding']}>
// 			<div className={[styles['base-circle'], styles['close-circle']].join(' ')}></div>
// 			<div className={[styles['base-circle'], styles['min-circle']].join(' ')}></div>
// 			<div className={[styles['base-circle'], styles['max-circle']].join(' ')}></div>
// 		</div>
// 	)
// }

export function Terminal(props: TerminalProps) {
	const { children, style, className, windowDecoration } = props;

	const boxStyle = {
		...defaultStyle,
		...style
	}

	return (
		<div className={className ?? "code"}>
			<Box style={boxStyle}>
				{windowDecoration && (
					<div className={[styles['button-padding']].join(' ')}>
						<div className={[styles['base-circle'], styles['close-circle']].join(' ')}></div>
						<div className={[styles['base-circle'], styles['min-circle']].join(' ')}></div>
						<div className={[styles['base-circle'], styles['max-circle']].join(' ')}></div>
					</div>
				)} {children}
			</Box >
		</div >
	);
}
