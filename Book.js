'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
/* const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa'); */
const mongoose = require('mongoose');

const app = express();
app.use(cors());
module.exports = Book;
const PORT = process.env.PORT || 3001;

  //2- create BookSchema
  const BookSchema=mongoose.Schema({
    name:String,
    description:String,
    status:String,
});

//3- create a model for Book
const BookModel=mongoose.model('Book',BookSchema);
  //4- data seeding (store data)
  let arrBooks=[];
    const book1=new BookModel({
        name:'The Life',
        description:'This book takes a look at his life starting with his early beginnings in Seattle, to becoming the richest man in the world and beyond. We take a look at his first taste of failure with his initial business venture, following on with his major successes and failures along the way. The aim of this book is to be educational and inspirational with actionable principles you can incorporate into your own life straight from the great man himself.',
        status:'principles for success!',
    });
    const book2= new BookModel({
        name:'Overdrive: Bill Gates and the Race to Control Cyberspace',
        description:'A stupendous success story. This is the most informative book yet on Bill Gates and Microsoft.',
        status:'An engaging, almost classic tale of a boy who finds power in gadgets and then wont let go',
       
    });
    const book3 = new BookModel({
        name:'Bill Gates: Hero or Villain',
        description:'Intelligent and fiercely competitive, he built Microsoft into one of the biggest and most successful companies of our time.',
        status:'any status',
    })
    
    book1.save();
    book2.save();
    book3.save();
    book4.save();
    console.log(book1.name);
arrBooks.push(book1);
arrBooks.push(book2);
arrBooks.push(book3);
arrBooks.push(book4);
  function Book(req,res){
    //seedBookCollection();
   
    res.send(book1);
  }

class Books{
   
    constructor(arrObj){
        this.arrBooks = arrObj;
    }
    
}
