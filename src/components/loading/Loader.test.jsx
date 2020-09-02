import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Loader } from './Loader';

test('Loader component functions', () => {
    const component = renderer.create(
        <Router>
            <Loader />
        </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0].children[0]).toContain('Ice and Fire');
    expect(tree.children[1].children[0].children[0]).toContain('Loading...');
});