## Requirements

- Node and npm

## Installation

- Clone the repo: `git clone git@github.com:scotch-io/node-api`
- Install dependencies: `npm install`
- Start the Database: `mongod --dbpath data`
- Start the server: `node server.js` 

## Testing the API
Test your API using Postman


## API
Returns the webseite white GET
- http://localhost:8080/name.html (replaces name.html with the webseite or if you dont now http://localhost:8080/ retuns main page)

Returns JSON
-GET   on http://localhost:8080/api/todos    returns all Todos in the Database
-POST  on http://localhost:8080/api/todos    returns Message created if succeed and other the error
-GET   on http://localhost:8080/api/todos/id returns the todo with the id if it exists
-PUT   on http://localhost:8080/api/todos/id returns Message updated if succeed and error if not
-DELET on http://localhost:8080/api/todos/id returns Message deleted if succeed and error if not
