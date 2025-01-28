const express = require('express');
const mangoose = require('mangoose');
const app=express();
const port = 5200;

app.use(express.json())

mangoose.connect()