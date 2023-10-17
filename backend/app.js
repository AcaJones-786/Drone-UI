const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3030;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SEC = "al;sdkfsdkljoheroirklv65ga,sn6865sioerrlkv;][s;v"

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/drone-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// app.get('/', function (req, res) {
//     res.send('ola');
// });

require ('./models/user');
const User = mongoose.model('User');

app.post("/register", async (req, res) => {
    const {username, email, password} = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
      const registeredUser = await User.findOne({email});
      if (registeredUser) {
        return res.send({message: "User already exists"});        
      }

      await User.create({username, email, password:encryptedPassword});
      res.send({message: "User created successfully"});
    } catch (error) {
        res.send({message: "error creating user"});
    }
})

app.post("/login-user", async (req, res) => {
  const {email, password} = req.body;

  const registeredUser = await User.findOne({email});
  if (!registeredUser) {
    return res.send({error: "User not found"});        
  }
  if(await bcrypt.compare(password, registeredUser.password)){
    const token = jwt.sign({email:registeredUser.email}, JWT_SEC);

    if (res.status(201)) {
      return res.json({status: "ok", message: "Log in approved", data: token})
    }
    else{
      return res.json({error: "Error loggin in. Please try again"});
    }
  }
  return res.json({error: "Incorrect password"});
});

app.post("/homeUser", async (req, res) => {
  const {token} = req.body;
  try {
    const user=jwt.verify(token,JWT_SEC);
    const useremail = user.email;
    User.findOne({email:useremail})
    .then((data)=>{
      res.send({staus: "ok", data: data});
    })
    .catch ((error) => {
      res.send({staus: "error", data: error});
  }); 
  } catch (error) {}
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
