import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

test('Returns snapshot and application text', () => {
    const component = renderer.create(
        <Router>
            <Header />
        </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(tree.children[0].children[0].children[0]).toContain('Ice and Fire');
});