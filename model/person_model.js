const mongoose= require('mongoose');

const PersonSchema= mongoose.Schema({

    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        unique: true,
    },
},
{
    collection:'PersonSchema',
    versionKey: false //here
});

module.exports = mongoose.model("Persons",PersonSchema);