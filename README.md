# Palindrome

This repository is my submission to the home challenge requested by Supersolid.

## Frontend

Following the instructions, I didn't change the frontend. I just relocated the 2 files to the `static` folder for clarity.

## Backend

Aside from the root path corresponding to the frontend, the backend is a very basic API with the requested endpoints.

The backend uses TypeScript to improve the development process.

To install all the dependencies, you have to first run:

```sh
npm install
```

Then you can run the server with the following:

```sh
npm start
```

## Development

To develop the backend, you can run the `start:dev` npm script which will launch a nodemon server so any file change relevant to the server will trigger a restart. You can launch it via:

```sh
npm run start:dev
```

## Test

This minimal backend comes with a basic test coverage.

To run them, you can use the following command:

```sh
npm run test
```

If you want to have your tests relaunch on file change, you can use the following:

```sh
npm run test:watch
```

#### Unit tests

- Config: to check if the config is indeed a singleton
- Palindrome entity: to check the implementation of the palindrome verification
- Palindrome service: to check the in-memory high score list and the insertion order

#### Integration tests

- Server: to check the 3 endpoints and their responses
