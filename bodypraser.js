//what is bodypraser?
//A body parser is a middleware that parses the incoming request body and makes it accessible in a convenient format within your application. 
//When you receive data from an HTTP POST or PUT request, the request body contains the data sent by the client, typically in JSON or URL-encoded form. 
//The body parser middleware helps you extract and process this data easily.

//Get: The GET method is used to request data from a specified resource, and it sends the data in the URL query parameters rather than in the request body. 
//However, some applications may choose to use the GET method with a request body to send data, 
//although this is not considered a standard practice and might have limitations.

   
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log(formData); // Output the parsed data to the console
  res.send('Form data received!');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

