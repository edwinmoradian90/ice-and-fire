import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Houses from './Houses';

describe('Houses', () => {
    const items = {
        data: {
            name: 'someone',
            region: 'somewhere',
            heir: 'someone',
            founded: 'sometime',
            founder: 'someone',
            currentLord: 'someone',
        },
    };
    it('renders correctly', () => {
        const component = renderer.create(
            <Router>
                <Houses items={items} />
            </Router>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});