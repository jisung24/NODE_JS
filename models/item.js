'use strict';
const mongoose = require('mongoose');
const  { Schema } = mongoose;

const ItemSchema = new Schema(
    {
        title : {
            type : String,
            required : true,
        },
        content : {
            type : String,
        },
        price : {
            type : Number,
            min : 1,
            max : 100000,
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Item', ItemSchema);