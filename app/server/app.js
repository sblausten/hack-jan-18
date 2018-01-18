import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import {handleMessage, handlePostback} from "./handlers";
var app = require('express')();
var server = require('http').Server(app);
import getIO from './io';

'use strict';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const VERIFY_TOKEN = "people-wire";


const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

app.get('/', (req, res) => {
    res.sendFile(indexPath);
})

app.post('/fb-hook', (req, res) => {

    let body = req.body;

    if (body.object === 'page') {
        body.entry.forEach(function(entry) {
            let webhook_event = entry.messaging[0];
            console.log('about to emit',webhook_event);
            getIO().on('connection', (socket) => {
                console.log('emitting',webhook_event);
                socket.emit('fo', webhook_event);
            });

            let sender_psid = webhook_event.sender.id;
            console.log('Sender ID: ' + sender_psid);

            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }

        });
        res.status(200).send('EVENT_RECEIVED');

    } else {
        res.sendStatus(404);
    }

});

app.get('/fb-hook', (req, res) => {

    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        } else {
            res.sendStatus(403);
        }
    }
});

export default server;