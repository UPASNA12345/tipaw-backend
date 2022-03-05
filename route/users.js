const express = require('express');
const User = require('../models/users.js')

const router = express.Router();

// router.post('/signin', (req, res) => {
//     const inputData = req.body;
//     if (!inputData) return res.status(400).send('something went wrong');

//     res.status(200).send('User created successfully').send(inputData);
// })

router.post('/', (req, res)=> {
const users = new User({
    firstName: req.body.firstName,
    lastName:req.body.lastName,
    email: req.body.email,
    password: req.body.password,
}) 
users.save()
res.status(201).json(users)
  })


  module.exports = router;