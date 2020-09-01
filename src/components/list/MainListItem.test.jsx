import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainListItem from './MainListItem';

test('renders correctly and matches snapshot', () => {
    const component = renderer.create(
        <Router>
            <MainListItem />
        </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});