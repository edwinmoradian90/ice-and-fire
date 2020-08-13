import React from 'react'
import Search from './Search.jsx'
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders', () => {
    shallow(<Search />)
})