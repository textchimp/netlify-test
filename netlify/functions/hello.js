const axios = require('axios');

exports.handler = async function(event, context) {
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({event, context})
  // };

  return axios.get('http://numbersapi.com/random/trivia?json');
}
