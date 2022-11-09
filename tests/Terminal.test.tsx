/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import { Terminal } from '../src/Terminal'


const children = (
	<div>
		<p id="child">this is a child</p>
	</div>
)

describe('Terminal', () => {
	it('renders', () => {
		const { container } = render(<Terminal />)
		expect(container).toMatchSnapshot()
	});

	it('renders with window decoration', () => {
		const { container } = render(<Terminal windowDecoration={true} />)
		expect(container).toMatchSnapshot()
		expect(container.querySelector('.base-circle')).not.toBeNull()
	});

	it('renders with children', () => {
		const { container } = render(<Terminal>{children}</Terminal>)
		expect(container).toMatchSnapshot()
		expect(container.querySelector('#child')).toBeTruthy()
	})

	it('renders with window decoration and children', () => {
		const { container } = render(<Terminal windowDecoration={true}>{children}</Terminal>)
		expect(container).toMatchSnapshot()
		expect(container.querySelector('#child')).toBeTruthy()
		expect(container.querySelector('.base-circle')).not.toBeNull()
	})
})
