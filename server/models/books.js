/*
FileName: COMP229-F2022-Midterm-[301253726]
Author Name: Binet Sheriff
StudentID: 301253726
WebAppName: Favorite Book List Web App
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
