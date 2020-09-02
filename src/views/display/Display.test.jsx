import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Display from './Display';
import rootReducer from '../../redux/reducers/rootReducer';

describe('Display', () => {
    const store = createStore(rootReducer);
    const location = {
        pathname: 'https://anapioficeandfire/api/characters/200'
    }
    it('Matches snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <Display location={location} />
                </Router>
            </Provider>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});