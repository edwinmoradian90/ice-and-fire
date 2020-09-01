import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Categories from './Categories';
import rootReducer from '../../redux/reducers/rootReducer';

describe('Categories', () => {
    const store = createStore(rootReducer);
    const match = {
        path: '/categories'
    };
    it('Matches snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <Categories match={match} />
                </Router>
            </Provider >
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});