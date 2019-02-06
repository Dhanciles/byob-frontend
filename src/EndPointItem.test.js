import React from 'react'; 
import { shallow } from 'enzyme'; 
import EndPointItem from './EndPointItem.js'
import endPointsData from '../endpoints-data.js'


describe('EndPointItem', () => {
  let mockData
  beforeEach(() => {
    mockData = endPointsData.endpoints
  })
  it('should match snapshot', () => {
    const wrapper = shallow(<EndPointItem data={ mockData }/>)

    expect(wrapper).toMatchSnapshot()
  })
  
})