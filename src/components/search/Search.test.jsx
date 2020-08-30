import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers/rootReducer';

describe('Search component', () => {
    const store = createStore(rootReducer)
    const component = renderer.create(
        <Provider store={store}>
            <Search />
        </Provider>
    );

    const tree = component.toJSON();

    it('matches snapshot', () => {
        expect(tree).toMatchSnapshot();
    });

    it('should have search button', () => {
        expect(tree.children[1].props.type).toContain('submit')
    });

    it('should have img in place of button for search button', () => {
        expect(tree.children[1].children[0].type).toContain('img');
    });

    it('should have text input', () => {
        expect(tree.children[0].props.type).toContain('text');
    });

    it('should have input placeholder', () => {
        expect(tree.children[0].props.placeholder).toContain('Search By Name');
    });

    console.log(tree.children[1])
});