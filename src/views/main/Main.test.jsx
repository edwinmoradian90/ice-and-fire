import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from '../../redux/reducers/rootReducer';
import Main from './Main';

describe('Main', () => {
    const store = createStore(rootReducer);
    it('matches snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <Main />
                </Router>
            </Provider>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});