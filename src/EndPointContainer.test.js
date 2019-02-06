import React from 'react'; 
import { shallow } from 'enzyme'; 
import { EndPointContainer } from './EndPointContainer.js'; 

describe('EndPointContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<EndPointContainer />)

    expect(wrapper).toMatchSnapshot()
  })
})