const yelp = require('./yelp.js');

yelp.getRandomRestraunt()
    .then(res => {
        console.log(res);
    });
