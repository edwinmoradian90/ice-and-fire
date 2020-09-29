import React from 'react';
import CategoryListItem from './CategoryListItem';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('Returns name or alias', () => {
    const item = {
        name: 'Jon Snow',
        aliases: ['Lord Snow'],
        url: 'https://anapioficeandfire.com/api/characters/583'
    };
    const category = 'Characters';
    const component = renderer.create(
        <Router>
            <CategoryListItem
                category={category}
                item={item}
            />
        </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();



})