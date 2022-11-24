/*
FileName: COMP229-F2022-Midterm-[301253726]
Author Name: Binet Sheriff
StudentID: 301253726
WebAppName: Favorite Book List Web App
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
