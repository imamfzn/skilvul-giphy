# Skilvul Giphy

[![Netlify Status](https://api.netlify.com/api/v1/badges/5ac2957f-3a8a-4827-84bc-d5ff83bff339/deploy-status)](https://app.netlify.com/sites/imamfzn-giphy-skilvul/deploys)


# Description

This is my super simple react app to gather some gifs from https://giphy.com/. This app is part of [Skilvul](https://skilvul.com/) Coding Mentor Technical Test. Because i'm passionate of teaching something especially in algorithm, data-structre and coding things.

You can try it on:

https://imamfzn-giphy-skilvul.netlify.app/


# Features and Components

I already finished all main features and minimal components of this app, there are:

- [x] Homepage
- [x] Iron Man Giphy
- [x] Search Giphy
- [x] Search Bar
- [x] Gif List
- [x] Gif Item


# Setup

Prerequisite:
* Node v14.x or later
* NPM v6.x or later

## Development
Clone this repository and enter on your local directory
```bash
git clone https://github.com/imamfzn/skilvul-giphy.git
cd skilvul-giphy

```

Install dependencies
```bash
npm install
```

Setup `GIPHY_API_KEY`. Setup your giphy api key on https://developers.giphy.com/ and put it as environment variables

```bash
cp env.sample .env
```

Run on development mode
```bash
npm start
```
The app will running at `http://localhost:3000`


## Test

Running test and linter:

```bash
npm run lint
npm run test
```

## Build
```bash
npm run build
```
