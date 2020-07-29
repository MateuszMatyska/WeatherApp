import React from 'react';
import {render} from 'react-native-testing-library';
import About from 'src/screens/about/About';
import {text} from 'src/screens/about/text';

describe('About screen test', () => {
    test('rendering test', () => {
        const {getAllByText} = render(<About />);

        const title = 'About Screen';
        const titleElement = getAllByText(title);

        const contentElement = getAllByText(text);
        
        expect(titleElement).toHaveLength(1);
        expect(contentElement).toHaveLength(1);
    })
})