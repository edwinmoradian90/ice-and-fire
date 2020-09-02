import React from 'react';
import renderer from 'react-test-renderer';
import Books from './Books';

describe('Books', () => {
    const items = {
        data: {
            name: 'test',
            authors: [
                'someone'
            ],
            numberOfPages: '9000',
            publisher: 'someone',
            country: 'somewhere',
            released: 'sometime',
        },
    };
    it('renderers correctly', () => {
        const component = renderer.create(
            <Books items={items} />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});