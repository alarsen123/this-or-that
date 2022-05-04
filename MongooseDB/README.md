# MongooseDB
This or that survey website express server and db client

## Steps to set up the database
- run <code>rundb</code> to start the server on port 3000
- in another terminal, run <code>rundbClient</code> to enter the MongoDB shell
- enter <code>load('createDB\\createAdminUser.js');</code> in the shell to create an admin user
- enter <code>load('createDB\\createData.js');</code> in the shell to populate the data
