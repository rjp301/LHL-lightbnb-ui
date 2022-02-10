const { getAllReservations } = require('./server/database');


getAllReservations(2).then(res => console.log(res));