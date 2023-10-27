# E-Commerce Back-end

## Description
This is the back end for an e-commerce site. It contains a database schema, table models, and seed data. It has working RESTful API routes for all CRUD queries (get all, get one, post, put, delete) to all tables in the database. Through these routes, users can access and manipulate database info.

## Directions for Use
To use, first install the necessary npm packages by running npm i. Next, start up mysql, run the schema to initialize the database, and seed the database (either by entering "npm run seed" or "node seeds" into the command line.) Start up the server by typing "node server.js". Once this groundwork is laid and your server is running, open insomnia and take the desired actions to read or manipulate the data.

## Demonstration Video
https://drive.google.com/file/d/1SIv50tsp095gK6ChlrglSk_AtuyEAyM2/view

## Technologies Used
This runs using Node.js, with dotenv, express, mysql2, and seqelize as dependencies. Insomnia is used in lieu of a front end to access the routes, and through them, the database.

## GitHub Repository
https://github.com/bdeutmeyer/e-commerce-back-end

## Credits
Starter code for this application was provided in the curriculum. Additionally, our instructional staff provided the Insomnia files, so that structure (with routes and body info) came pre-loaded. I employed the rest of the code on my own, largely copying and pasting code from previous class activities and then tailoring the code to fit this application.