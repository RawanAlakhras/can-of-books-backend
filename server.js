'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
/* const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa'); */
const mongoose = require('mongoose');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
/* const Book=require('./Book');
const User = require('./User'); */
app.get('/test', (request, response) => {

  // TODO: 
  // STEP 1: get the jwt from the headers
  // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
  // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
  // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
app.get('/', (req, res) => {
  res.send('i am in the root rout');
});

//1- connect the express server with mongodb
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

//test connection 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('were connected');
});


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
function seedBookCollection() {
  
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
    console.log(book1.name);
arrBooks.push(book1);
arrBooks.push(book2);
arrBooks.push(book3);
}
seedBookCollection();

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
    books:arrBooks,
})
rawan.save();



app.get('/Book', (req,res) =>{
  res.send(arrBooks);
});
app.get('/User', (req,res)=>{
  res.send(rawan);
});
 














