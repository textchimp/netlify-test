const axios = require('axios');

exports.handler = async function(event, context) {
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({event, context})
  // };
  const res = await axios.get('http://numbersapi.com/random/trivia?json');
  return {
    statusCode: 200,
    body: JSON.stringify({data: res.data, event})
  };
}
