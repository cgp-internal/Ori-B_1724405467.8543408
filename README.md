Notes API Application
=====================

Introduction
------------

This is a Notes API application built with Express.js and csv-parser. It allows you to perform CRUD operations on notes stored in a CSV file.

How to Run
------------

1. Run the command `bash run.sh` to install Node, initialize a project, and install Express and csv-parser.
2. Start the server by running `node app.js`.
3. Use a tool like Postman or cURL to interact with the API.

API Endpoints
-------------

* `POST /notes`: Create a new note.
* `GET /notes`: Retrieve a list of all notes.
* `GET /notes/:id`: Retrieve a specific note by ID.
* `PUT /notes/:id`: Update a specific note by ID.
* `DELETE /notes/:id`: Delete a specific note by ID.

Note
----

This application uses a CSV file `notes.csv` for data storage. Make sure to create this file in the root directory of the project.