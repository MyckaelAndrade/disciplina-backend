const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config({path:'variables.env'});

const apiRoutes = require('./routes.js');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log('Error: ', err.message);
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected!');
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/', apiRoutes);

const servico = server.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta: ', servico.address().port);
});
servico.on('error', (err) => {
    console.log('Error: ', err.message);
});