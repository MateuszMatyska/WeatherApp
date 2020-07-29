import React from 'react';
import {render} from 'react-native-testing-library';
import App from '../App';

jest.mock("react-native-reanimated", () =>
	jest.requireActual("../node_modules/react-native-reanimated/mock"),
);

describe('App screen tests', () => {
	test('rendering test', () => {
		const {getAllByText} = render(<App />);
	});
})
