const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true},(err) => {
    if (!err) { console.log('MongoDB connection succesful !!!') }
    else { console.log('Error in DB : ' + err) }

});

require('./employee.model');