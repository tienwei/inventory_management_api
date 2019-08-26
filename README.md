# Inventory Management Api
Simple nodeJs express restful api

## Get Started
Simply run `npm install` and then `npm start` to start the api server, running on `localhost:3001`.

## Database Setup
Make sure MySQL is running on your localhost with `root/root` as credentials.
Excute `setup.sql` to initialise the database and tables.

## Features
- Restful api(CRUD) for shopping centres
- Restful api(CRUD) for assets
- With basic auth in place (username: testuser, password: testpassword)
- With access.log tracking all the request information including user information

## ToDo
- Make users stored in the database
- Add tests with Jest and Supertest
- Make UI
