const property = {
  owner_id: 2,
  title: 'string',
  description: 'string',
  thumbnail_photo_url: 'string',
  cover_photo_url: 'string',
  cost_per_night: 5000,
  street: 'string',
  city: 'string',
  province: 'string',
  post_code: 'string',
  country: 'string',
  parking_spaces: 2,
  number_of_bathrooms: 2,
  number_of_bedrooms: 2
}

const { addProperty } = require('./server/database');
console.log(addProperty(property));