// const starName = 'vega'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/stars?name=' + starName,
//     headers: { 'X-Api-Key': '9JJTx6tErKRRT9Uagjl8cw==ZiNng0p70ANHmnJw'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

import pkg from 'request';
const { get } = pkg;

const name = 'centa';
get({
  url: 'https://api.api-ninjas.com/v1/stars?name=' + name,
  headers: {
    'X-Api-Key': '9JJTx6tErKRRT9Uagjl8cw==ZiNng0p70ANHmnJw'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});