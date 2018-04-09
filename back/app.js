const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/completedMaps');
let db = mongoose.connection;

// Check DB connection
db.once('open', function(){
    console.log('Connected to MongoDB');
})

// Check DB errors
db.on('error', function(err){
    console.log(err);
});

// Initalize app
const app = express();

// Bring in models
let completedMaps = require('./models/completedMaps');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
    console.log(completedMaps);
    completedMaps.find({}, function(err, completedMaps){ //query within emtpy {}, probably user id
        if (err){
            console.log(err);
        } else {
            console.log(completedMaps);
            res.render('index', {
                title: 'Completed Map #s',
                completedMaps: completedMaps
            });
        }
    });
    /*
    let completedMaps = [
        {completed: [5, 1, 34]},
        {completed: [6, 12, 73]},
        {completed: [5, 61, 3]}
    ];
    
    res.render('index', {
        title: 'Completed Map #s',
        completedMaps: completedMaps
    })
    */
});

app.listen(3000, function(){
    //console.log('Server started on port 3000...');
})