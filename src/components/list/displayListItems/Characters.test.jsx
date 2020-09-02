import React from 'react';
import renderer from 'react-test-renderer';
import Characters from './Characters';

describe('Characters', () => {
    const items = {
        data: {
            aliases: [
                'something'
            ],
            gender: 'something',
            name: 'someone',
            born: 'soemtime',
            died: 'sometime',
            mother: 'someone',
            father: 'someone',
            playedBy: 'someone'
        },
    };
    it('renders correctly', () => {
        const component = renderer.create(
            <Characters items={items} />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});