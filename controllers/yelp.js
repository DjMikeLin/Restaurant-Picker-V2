const apiKey = require('../yelpAoiCred.js').APIKey;
const yelp = require('yelp-fusion');

const getRandomRestraunt = () => {
    const searchRequest = {
      term:'Four Barrel Coffee',
      location: 'san francisco, ca'
    };

    const client = yelp.client(apiKey);

    return client.search(searchRequest).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
      return prettyJson;
    }).catch(e => {
      console.log(e);
    });

}

module.exports = {
    getRandomRestraunt
}


