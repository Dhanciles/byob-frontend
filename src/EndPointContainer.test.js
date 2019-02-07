import React from 'react'; 
import { shallow } from 'enzyme'; 
import { EndPointContainer } from './EndPointContainer.js';
import uuid from 'uuid' ;

jest.mock('uuid', () => {
  return () => {return 1}
});

describe('EndPointContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<EndPointContainer />)

    expect(wrapper).toMatchSnapshot()
  })
})