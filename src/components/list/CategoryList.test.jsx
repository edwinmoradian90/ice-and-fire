import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CategoryList from './CategoryList';
import rootReducer from '../../redux/reducers/rootReducer';

describe('category list', () => {
    const store = createStore(rootReducer);
    const category = '/characters';
    const data = [
        {
            aliases: ['Ned', 'The Ned', 'Quiet Wolf'],
            books: ['Book1', 'Book2'],
            died: '299AC',
            gender: 'Male',
            url: 'https://anapioficeandfire.com/api/characters/339',
        },
    ];
    const item = {
        name: 'Eddard Stark',
        aliases: [
            'soemthing'
        ],
        url: 'https://anapioficeandfire.com/api/characters/339',
    }
    it('renders properly', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <CategoryList
                        data={data}
                        category={category}
                        item={item}
                    />
                </Router>
            </Provider>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});