import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from './Box';
import styles from './buttons.module.css';
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
};
// const macosWindowDecoration = () => {
// 	return (
// 		<div className={styles['button-padding']}>
// 			<div className={[styles['base-circle'], styles['close-circle']].join(' ')}></div>
// 			<div className={[styles['base-circle'], styles['min-circle']].join(' ')}></div>
// 			<div className={[styles['base-circle'], styles['max-circle']].join(' ')}></div>
// 		</div>
// 	)
// }
export function Terminal(props) {
    const { children, style, className, windowDecoration } = props;
    const boxStyle = Object.assign(Object.assign({}, defaultStyle), style);
    return (_jsx("div", Object.assign({ className: className !== null && className !== void 0 ? className : "code" }, { children: _jsxs(Box, Object.assign({ style: boxStyle }, { children: [windowDecoration && (_jsxs("div", Object.assign({ className: [styles['button-padding']].join(' ') }, { children: [_jsx("div", { className: [styles['base-circle'], styles['close-circle']].join(' ') }), _jsx("div", { className: [styles['base-circle'], styles['min-circle']].join(' ') }), _jsx("div", { className: [styles['base-circle'], styles['max-circle']].join(' ') })] }))), " ", children] })) })));
}
