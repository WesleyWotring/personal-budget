const mongoose = require("mongoose");
const mongodb = require('mongodb');

//validate its number
//validate if value is passed
// find by id --> document then id is found else --> you may use id

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    budget: {
        type: Number,
        required: true,
    }, 
    backgroundColor:{
        type: String,
        validate:{
        validator: function(v) {
             return /^#([A-Fa-f0-9]{6})$/.test(v); 
            },
             message: props => `${props.value} is not a valid color!` 
            },
        required: true
        }
    

}, { collection: 'budget'});

module.exports = mongoose.model('budget', budgetSchema)