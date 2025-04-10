const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,
    idade: Number,
    email: String,
    phone: String,
    address: String,
    state: String,
});

const modelName = 'User';

if (mongoose.connection && mongoose.connection.models[modelName]) { 
    module.exports = mongoose.connection.models[modelName];
}
else {
    const model = mongoose.model(modelName, modelSchema);
    module.exports = model;
}