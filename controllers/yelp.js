const apiKey = require('./yelpAoiCred.js').APIKey;
const yelp = require('yelp-fusion');
//Get random location in some city and state in the form of "atlanta, ga"
const getRandomRestaurant = (location) => {
    const searchRequest = {
      location
    };

    const client = yelp.client(apiKey);

    return client.search(searchRequest).then(response => {
      const randomResult = response.jsonBody.businesses[Math.floor(Math.random() * response.jsonBody.businesses.length)];
      const prettyJson = JSON.stringify(randomResult, null, 4);
      return prettyJson;
    }).catch(e => {
      console.log(e);
    });

}

module.exports = {
    getRandomRestaurant
}
