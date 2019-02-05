import React from 'react'; 
import endpointData from '../endpoint-data.js'; 

export const EndPointContainer = () => {
  const endpoints = endpointData.map(endpoint => (<EndpointItem data={endpoint} />))

  return (
    <div>
      { endpoints }
    </div>
  )
}