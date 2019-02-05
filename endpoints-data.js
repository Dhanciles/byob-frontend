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
      examples: {
        response: [
          {
              "id": 1,
              "name": "New York City",
              "state": "NY",
              "population": 8622698,
              "capital": false,
              "created_at": "2019-02-05T00:54:20.896Z",
              "updated_at": "2019-02-05T00:54:20.896Z"
          },
          {
              "id": 3,
              "name": "Los Angeles",
              "state": "CA",
              "population": 3999759,
              "capital": false,
              "created_at": "2019-02-05T00:54:20.906Z",
              "updated_at": "2019-02-05T00:54:20.906Z"
          },
          {
              "id": 2,
              "name": "Chicago",
              "state": "IL",
              "population": 2716450,
              "capital": false,
              "created_at": "2019-02-05T00:54:20.906Z",
              "updated_at": "2019-02-05T00:54:20.906Z"
          }]
      },
      request_should_include: null,
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
      examples: {
        request: {
          "name": "New York City",
          "state": "NY",
          "population": 8622698,
          "capital": false,
        }
      },
      request_should_include: ['name', 'state', 'population', 'capital'],
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
      examples: {
        response: [
          {
              "id": 1,
              "name": "Los Tacos No. 1",
              "address": "Chelsea Market, 75 9th Avenue, New York 10011",
              "city": "New York City",
              "rating": 4,
              "avg_cost": "$25",
              "city_id": 1,
              "created_at": "2019-02-05T00:54:20.932Z",
              "updated_at": "2019-02-05T00:54:20.932Z"
          },
          {
              "id": 3,
              "name": "Cascabel Taqueria",
              "address": "1556 2Nd Avenue 10028",
              "city": "New York City",
              "rating": 4,
              "avg_cost": "$60",
              "city_id": 1,
              "created_at": "2019-02-05T00:54:20.935Z",
              "updated_at": "2019-02-05T00:54:20.935Z"
          },
          {
              "id": 2,
              "name": "Sombrero",
              "address": "303 West 48th Street, New York 10036",
              "city": "New York City",
              "rating": 2,
              "avg_cost": "$65",
              "city_id": 1,
              "created_at": "2019-02-05T00:54:20.936Z",
              "updated_at": "2019-02-05T00:54:20.936Z"
          }
        ]
      },
      request_should_include: null,
      successful_status_code: 200,
      returns: 'an array of all restaurants in the database'
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
      examples: {
        response: [
          {
            "id": 19,
            "name": "Denver",
            "state": "CO",
            "population": 704621,
            "capital": true,
            "created_at": "2019-02-05T00:54:20.920Z",
            "updated_at": "2019-02-05T00:54:20.920Z"
          }
        ]
      },
      request_should_include: null,
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
      examples: {
        request: {
          "name": "Los Tacos No. 1",
          "address": "Chelsea Market, 75 9th Avenue, New York 10011",
          "city": "New York City",
          "rating": 4,
          "avg_cost": "$25",
        }
      },
      request_should_include: ['name', 'address', 'city', 'rating', 'avg_cost'],
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
      examples: {},
      request_should_include: 'none',
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
      examples: {
        response: [
          {
            "id": 204,
            "name": "Machete Tequila + Tacos",
            "address": "2817 East 3rd Avenue, Denver 80206",
            "city": "Denver",
            "rating": 3,
            "avg_cost": "$25",
            "city_id": 19,
            "created_at": "2019-02-05T00:54:21.037Z",
            "updated_at": "2019-02-05T00:54:21.037Z"
          }
        ]
      },
      request_should_include: 'none',
      successful_status_code: 200,
      returns: 'an array of any restaurants in the database that match the id'
    },
    {
      method: 'PUT',
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
      examples: {
        request: {
          "name": "Machete Tequila + Tacos",
          "address": "2817 East 3rd Avenue, Denver 80206",
          "city": "Denver",
          "rating": 3,
          "avg_cost": "$25",
        }
      },
      request_should_include: ['name', 'address', 'city', 'rating', 'avg_cost'],
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
      examples: {},
      request_should_include: 'none',
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
      examples: {
        response: [
          {
              "id": 205,
              "name": "Margs Taco Bistro",
              "address": "200 Fillmore Street, Denver 80206",
              "city": "Denver",
              "rating": 3,
              "avg_cost": "$10",
              "city_id": 19,
              "created_at": "2019-02-05T00:54:21.038Z",
              "updated_at": "2019-02-05T00:54:21.038Z"
          },
          {
              "id": 206,
              "name": "Taco John's",
              "address": "9675 Washington Street 80229",
              "city": "Denver",
              "rating": 0,
              "avg_cost": "$25",
              "city_id": 19,
              "created_at": "2019-02-05T00:54:21.038Z",
              "updated_at": "2019-02-05T00:54:21.038Z"
          },
          {
              "id": 207,
              "name": "Torchy's Tacos",
              "address": "1085 North Broadway 80203",
              "city": "Denver",
              "rating": 3,
              "avg_cost": "$25",
              "city_id": 19,
              "created_at": "2019-02-05T00:54:21.039Z",
              "updated_at": "2019-02-05T00:54:21.039Z"
          }
        ]
      },
      request_should_include: 'none',
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
      examples: {
        request: {
          "name": "Torchy's Tacos",
          "address": "1085 North Broadway 80203",
          "city": "Denver",
          "rating": 3,
          "avg_cost": "$25"
        }
      },
      request_should_include: ['name', 'address', 'rating', 'avg_cost'],
      successful_status_code: 201,
      returns: 'all properties with id'
    },
  ]
}