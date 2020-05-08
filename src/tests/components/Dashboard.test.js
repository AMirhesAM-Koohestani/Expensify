import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../../components/DashBoard'

test('should render dashboard page correctly', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper).toMatchSnapshot()
})