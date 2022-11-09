import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from './Box';
import './buttons.css';
const macosWindowDecoration = () => {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'base-circle close-circle' }), _jsx("div", { className: 'base-circle min-circle' }), _jsx("div", { className: 'base-circle max-circle' })] }));
};
export function Terminal(props) {
    const { children, style, className, windowDecoration } = props;
    return (_jsx("div", Object.assign({ className: className !== null && className !== void 0 ? className : "code" }, { children: _jsxs(Box, Object.assign({ style: style }, { children: [windowDecoration && macosWindowDecoration(), children] })) })));
}
