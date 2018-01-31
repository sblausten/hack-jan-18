## Hack 18

### install

* `npm i` - install dependencies

### run in dev

* `npm run build:watch:server` - runs babel to transpile the server from es6 to es5 (watch mode)
* `npm run build:watch:client` - runs webpack to build bundle (watch mode)
* `npm run start:dev` - in parallel shells it calls `build:watch:client` `build:watch:server` and then runs the app in watch mode, using nodemon

### prod

* `npm run build:server` - runs babel to transpile the server from es6 to es5 
* `npm run build:client` - runs webpack to build bundle
* `npm run build:prod` - builds both client and server
* `npm run start` - in parallel shells it calls `build:prod` and then runs the app 

### run locally

#### start ngrok
```bash
brew cask install ngrok
ngrok http 8080
```

Then click edit on (https://developers.facebook.com/apps/210142792866565/webhooks/)[https://developers.facebook.com/apps/210142792866565/webhooks/] and update callback url

#### start up local elasticsearch server
```bash
brew install elasticsearch
elasticsearch
```

#### add an index for saving messages
```bash
curl -XPUT 'localhost:9200/people-wire
```

#### start node app
```bash
npm start
```