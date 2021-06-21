'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
/* const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa'); */
const mongoose = require('mongoose');
const app = express();
app.use(cors());
const BookSchema=require('./Book');
const PORT = process.env.PORT || 3001;



//2- create user schema

const UserSchema=mongoose.Schema({
    email:String,
    books:[BookSchema],
  });
  
  //3- create a model for User
  const UserModel=mongoose.model('User',UserSchema);

//4- data seeding (store data)

const rawan= new UserModel({
    email:'rralakhras@gmail.com',
    books:[{
        name:'The Life',
        description:'This book takes a look at his life starting with his early beginnings in Seattle, to becoming the richest man in the world and beyond. We take a look at his first taste of failure with his initial business venture, following on with his major successes and failures along the way. The aim of this book is to be educational and inspirational with actionable principles you can incorporate into your own life straight from the great man himself.',
        status:'principles for success!',
    },{
        name:'Overdrive: Bill Gates and the Race to Control Cyberspace',
        description:'A stupendous success story. This is the most informative book yet on Bill Gates and Microsoft.',
        status:'An engaging, almost classic tale of a boy who finds power in gadgets and then wont let go',
       
    },{
        name:'Bill Gates: Hero or Villain',
        description:'Intelligent and fiercely competitive, he built Microsoft into one of the biggest and most successful companies of our time.',
        status:'any status',
    }]
})
rawan.save();
function User(req,res){
    //seedBookCollection();
   
    res.send(rawan);
  }

module.exports = User;

  