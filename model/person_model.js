const mongoose= require('mongoose');

//initialize the schema
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
    //do not display version key when a new person is created
    collection:'PersonSchema',
    versionKey: false //here
});

//exporting
module.exports = mongoose.model("Persons",PersonSchema);
