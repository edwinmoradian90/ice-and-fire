import React from 'react'
import Books from './Books'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'

configure({ adapter: new Adapter() });

it('renders', () => {
    shallow(<Books />)
})
