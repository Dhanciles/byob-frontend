import React from 'react'; 
import { shallow } from 'enzyme'; 
import EndPointItem from './EndPointItem.js'
import endPointsData from './endpoints-data.js'

describe('EndPointItem', () => {
  let mockData
  beforeEach(() => {
    mockData = endPointsData.endpoints[0]
  });

  it('should match snapshot when selected is false', () => {
    const wrapper = shallow(<EndPointItem data={ mockData }/>);
    expect(wrapper.instance().state.selected).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  
  it('should change the state of selected when the button is clicked', () => {
    const wrapper = shallow(<EndPointItem data={ mockData }/>)
    expect(wrapper.instance().state.selected).toEqual(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().state.selected).toEqual(true);
  });
  
  it('should match snapshot when selected is true', () => {
    const wrapper = shallow(<EndPointItem data={ mockData }/>)
    expect(wrapper.instance().state.selected).toEqual(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().state.selected).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});