module.exports = {
  endpoints: [
    {
      method: 'GET',
      path: '/api/v1/cities',
      properties: {
        id: 'number', 
        name: 'string', 
        state: 'string', 
        population: 'number', 
        capital: 'boolean', 
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'none',
      successful_status_code: 200,
      returns: 'an array of all cities in the database'
    },
    {
      method: 'POST',
      path: '/api/v1/cities',
      properties: {
        id: 'number', 
        name: 'string', 
        state: 'string', 
        population: 'number', 
        capital: 'boolean', 
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'all properties',
      successful_status_code: 201,
      returns: 'all properties with new id'
    },
    {
      method: 'GET',
      path: '/api/v1/restaurants',
      properties: {
        id: 'number', 
        name: 'string', 
        address: 'string', 
        rating: 'number', 
        avg_cost: 'string', 
        city_id: 'number',
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'none',
      successful_status_code: 200,
      returns: 'an array of all cities in the database'
    },
    {
      method: 'GET',
      path: '/api/v1/cities/:id',
      properties: {
        id: 'number', 
        name: 'string', 
        state: 'string', 
        population: 'number', 
        capital: 'boolean', 
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'none',
      successful_status_code: 200,
      returns: 'an array of any cities in the database that match the given id'
    },
    {
      method: 'PUT',
      path: '/api/v1/cities/:id',
      properties: {
        id: 'number', 
        name: 'string', 
        state: 'string', 
        population: 'number', 
        capital: 'boolean', 
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'all properties',
      successful_status_code: 202,
      returns: 'confirmation message'
    },
    {
      method: 'DELETE',
      path: '/api/v1/cities/:id',
      properties: {
        id: 'number', 
        name: 'string', 
        state: 'string', 
        population: 'number', 
        capital: 'boolean', 
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'none',
      successful_status_code: 204,
      returns: 'status code only'
    },
    {
      method: 'GET',
      path: '/api/v1/restaurants/:id',
      properties: {
        id: 'number', 
        name: 'string', 
        address: 'string', 
        rating: 'number', 
        avg_cost: 'string', 
        city_id: 'number',
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'none',
      successful_status_code: 200,
      returns: 'an array of any restaurants in the database that match the id'
    },
    {
      method: 'POST',
      path: '/api/v1/restaurants/:id',
      properties: {
        id: 'number', 
        name: 'string', 
        address: 'string', 
        rating: 'number', 
        avg_cost: 'string', 
        city_id: 'number',
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'all properties',
      successful_status_code: 201,
      returns: 'all properties with new id'
    },
    {
      method: 'DELETE',
      path: '/api/v1/restaurants/:id',
      properties: {
        id: 'number', 
        name: 'string', 
        address: 'string', 
        rating: 'number', 
        avg_cost: 'string', 
        city_id: 'number',
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'none',
      successful_status_code: 204,
      returns: 'response code only'
    },
    {
      method: 'GET',
      path: '/api/v1/cities/:id/restaurants',
      properties: {
        id: 'number', 
        name: 'string', 
        address: 'string', 
        rating: 'number', 
        avg_cost: 'string', 
        city_id: 'number',
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'none',
      successful_status_code: 200,
      returns: 'an array of restaurants that have matching city ids'
    },
    {
      method: 'POST',
      path: '/api/v1/cities/:id/restaurants',
      properties: {
        id: 'number', 
        name: 'string', 
        address: 'string', 
        rating: 'number', 
        avg_cost: 'string', 
        city_id: 'number',
        created_at: 'timestamp', 
        updated_at: 'timestamp'
      },
      request: 'all properties',
      successful_status_code: 201,
      returns: 'all properties with id'
    },
  ]
}