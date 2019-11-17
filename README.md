# Nomad Team Portal Web App

A minimal react.js web application for Nomad Interactive's Team Portal

Technologies we used:

- React.js and react-router
- Redux
- Eslint
- An express wrapper with webpack middleware for development sessions


## Create .env file

Create a new file with name .env and set up your application configuration here. The variables defined with an example below:

```
PORT=4600
```


## Run the application

1. ```npm install```
2. ```npm start``` or ```node index.js```


## Deploy on heroku

1. ```git init``` (if you are not cloning this repo)
2. ```heroku login``` (if you haven't logged in)
3. ```heroku create```
4. ```git push heroku master```
