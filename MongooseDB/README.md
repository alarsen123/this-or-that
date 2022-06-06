# MongooseDB
This or that survey website express server and db client

## Steps to set up the database
- run <code>rundb</code> to start the server on port 3000
- in another terminal, run <code>rundbClient</code> to enter the MongoDB shell
- enter <code>load('createDB\\createAdminUser.js');</code> in the shell to create an admin user
- enter <code>load('createDB\\createData.js');</code> in the shell to populate the data
- enter <code>mongod --repair --dbpath .\db</code> in the command prompt if the database does not load correctly

- enter <code>mongosh "mongodb+srv://thisorthat.cvsjwyz.mongodb.net/" --apiVersion 1 --username admin</code> Password is: test
- enter <code>load('createDB\\createData.js');</code> in the shell to populate the data