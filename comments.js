// Create web server for comments

// Import modules 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

// Set port
const port = 3000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
    fs.readFile('./data/comments.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
});

// Create new comment
app.post('/comments', (req, res) => {
    fs.readFile('./data/comments.json', 'utf8', (err, data) => {
        if (err) throw err;
        let comments = JSON.parse(data);
        let newComment = {
            id: comments.length + 1,

