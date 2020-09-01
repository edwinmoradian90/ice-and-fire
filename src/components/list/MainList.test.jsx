import React from 'react';
import renderer from 'react-test-renderer';
import MainList from './MainList';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Main List', () => {
    const url = 'https://anapioficeandfire.com/api';
    const data = {
        data: {
            books: `${url}/books`,
            characters: `${url}/characters`,
            houses: `${url}/houses`,
        },
    };
    it('renders properly', () => {
        const component = renderer.create(
            <Router>
                <MainList data={data} />
            </Router>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});