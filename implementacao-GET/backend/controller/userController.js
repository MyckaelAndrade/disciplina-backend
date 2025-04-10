const mongoose = require('mongoose');
const State = require('../model/state');
const User = require('../model/user');

module.exports = {
    getStates: async(req, res) => {
        let states = await State.find({});
        if (!states) {
            return res.status(404).json({ message: 'States not found' });
        }
        res.json(states);   
    },
    getUser: async(req, res) => {  
        let user = await User.find({});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }
};