# Restaurant-Picker
Web application to find a random restaurant based on user inputed location. This application consumes an API from Yelp.

## Technologies and Frameworks Used
### Bootstrap
### Heroku
### ExpressJS
### ReactJS
### Javascript, HTML, CSS

## Third Party API Consumed
[Yelp-Fusion](https://github.com/tonybadguy/yelp-fusion)

## Tools Used
### Postman
<https://www.getpostman.com/>
### ReText
<https://github.com/retext-project/retext/>

## Website/App Link
<https://random-restaurant-finder.herokuapp.com/>

## Prerequisites(Most recent versions should work)
### NodeJS
<https://nodejs.org/en/>
### NPM
<https://www.npmjs.com/>
### Yelp API Key(Needed to run on Local Machine)
<https://www.yelp.com/developers/documentation/v3/authentication/>

## To Test On Local Machine
1. Clone repository to your local machine
2. Run `npm i` in the project root then run `cd client` and lastly run `npm i` in the client directory
OR run `npm i && cd client && npm i` for simplicity
3. Run `cd ..` to go back to previous directory
4. Create a .env file in the project root and add then save `APIKey = YOUR API KEY` with the APIKey you obtained from Yelp
5. Open another instance of the terminal and run `node server.js`
6. On the original terminal, run `cd client` and then `npm start` to run the React client on your local machine
7. Repeat 5-6 as needed after saving code changes. Break out of running the backend or frontend clients by press `CTRL+C`

## References
All images used on the application DO NOT belong to me. All rights reserved with original creator.

## License
[MIT](https://github.com/nishanths/license/blob/master/LICENSE)