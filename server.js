const express = require('express');
const app = express();

const admin = require('firebase-admin');
const credentials = require('./key.json');
admin.initializeApp({
    credential: admin.credential.cert(credentials)
});


app.use(express.json());
