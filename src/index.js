	
// handler.js
'use strict';
 
module.exports.handler = function (event, context, callback) {
  console.log(event); // Contains incoming request data (e.g., query params, headers and more)
 
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Lambda with Api Gateway!' }),
  };
 
  callback(null, response);
};