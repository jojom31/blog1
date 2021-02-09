const express = require('express'),
    router = express.Router();
    bcrypt = require('../models/users'));
    UsersModel = require('../models/users');
    

router.get('signup', async (req, res) => {
    });
    router.get('/login', async (req, res) => {

    });


router.post('/signup', async (req, res) => {
    const {first_name, last_name, email_address, password} = req.body;
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashsync(password, salt);

    const response = await UsersModel.addUser(
        first_name, last_name, email_address, password
        );
    console.log("Registration Response:", response);
    if (response.id) {
        res.redirect('/users/login');
    }else{
        res.send(response).status(500);
    }
        res.sendStatus(200);
}); 



router.post('/login', async (req, res)=> {
    const {email_address, password } = req.body;
    console.log('email and password, email, password');
    res.sendStatus("/users")
});

module.exports = router; 