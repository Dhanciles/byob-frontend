import React from 'react'; 
import endpointData from '../endpoints-data.js'; 
import EndPointItem from './EndPointItem.js'; 
import uuid from 'uuid'; 

export const EndPointContainer = () => {
  const endpoints = endpointData.endpoints.map(endpoint => (<EndPointItem key={uuid()} data={endpoint} />))

  return (
    <div>
      { endpoints }
    </div>
  )
}
