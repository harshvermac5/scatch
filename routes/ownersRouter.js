const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

// Log the current environment
console.log('Current Environment:', process.env.NODE_ENV);

// Define a basic GET route
router.get('/', (req, res) => {
    res.send('ownersRouter');
});

// Conditionally add a POST route in development environment
if (process.env.NODE_ENV === 'development') {
    router.post('/create', async (req, res) => {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.send(503).send("You don't have permission to create a new user");
        }
        res.send('You can create a new user')
    });
}

module.exports = router;
