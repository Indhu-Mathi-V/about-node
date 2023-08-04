//what is event-driven programming
//In event-driven programming, the flow of the program is determined by events rather than a traditional linear sequence of execution.
// When an event occurs, it triggers a response, allowing the program to react and execute specific tasks.

//In Node.js, the event-driven model is achieved using its built-in EventEmitter class.
// EventEmitter provides a way to handle and emit custom events.

//there are three main layer

// i)Event Emitter-An EventEmitter is a core class in Node.js that allows you to handle and emit custom events. 
//for example: Suppose we want to create a basic logging system that emits events whenever a new log message is received.
// Other parts of the application can listen for these events and perform specific actions when a new log message is logged.

//ii)Event Listener-An event listener is a function that listens for and responds to events emitted by an EventEmitter object. 

//iii)Event Handler-An event handler is a function that is responsible for handling a specific event when it occurs. 
//In event-driven programming, an event handler is attached to an event and is executed when that event is triggered or emitted.
// It is used to respond to events and perform specific actions or logic associated with the event.


const EventEmitter = require('events');

class ChatApp extends EventEmitter {
  constructor() {
    super();
    this.users = {};
  }

  addUser(username) {
    this.users[username] = true;
    this.emit('userJoined', username);
  }

  removeUser(username) {
    delete this.users[username];
    this.emit('userLeft', username);
  }

  sendMessage(sender, message) {
    this.emit('message', { sender, message });
  }
}

// Usage example
const chatApp = new ChatApp();

// Event listeners for userJoined and userLeft events
chatApp.on('userJoined', (username) => {
  console.log(`${username} joined the chat.`);
});

chatApp.on('userLeft', (username) => {
  console.log(`${username} left the chat.`);
});

// Event listener for message event
chatApp.on('message', ({ sender, message }) => {
  console.log(`${sender}: ${message}`);
});

// Simulating users joining and sending messages
chatApp.addUser('Alice');
chatApp.addUser('Bob');
chatApp.addUser('Eve');

chatApp.sendMessage('Alice', 'Hi, everyone!');
chatApp.sendMessage('Bob', 'Hello, Alice!');

chatApp.removeUser('Bob');
chatApp.sendMessage('Eve', 'Goodbye!');

