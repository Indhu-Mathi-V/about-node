//what is event loop?
//The event loop is responsible for handling and processing asynchronous operations, such as I/O operations, timers, and event callbacks. 
//It enables Node.js to efficiently handle concurrent requests and perform multiple tasks without blocking the main execution thread.
//The event loop works based on an event-driven model, where it constantly checks for pending events and executes their associated callbacks when events are triggered.
// This allows Node.js to perform I/O operations asynchronously and efficiently use system resources.

const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response back to the client
  res.end('Hello, world!');
});

// Listen for incoming HTTP requests on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
