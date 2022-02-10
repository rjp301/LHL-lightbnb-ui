const { rows } = require('pg/lib/defaults');
const { getAllProperties } = require('./server/database');


const options = {};

getAllProperties(options).then(res => console.log(res));