const yelp = require('./yelp.js');

yelp.getRandomRestraunt('duluth, ga')
    .then(res => {
        console.log(res);
    });
