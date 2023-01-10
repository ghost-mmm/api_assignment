const express= require("express");
const router= express.Router();

const person= require("../model/person_model");


//get all people
router.get("/",async(req, res) => {
    try {
        const people = await person.find();
        res.json(people);

    } catch (err) {
        res.json({message: err});
    }
});

//get a specific person
router.get("/:id",async(req, res) => {
    try {
        const person_fetched = await person.findById(req.params.id);
        res.json(person_fetched);

    } catch (err) {
        res.json({message: err});
    }
})


//add a new person to the database

router.post("/",async (req, res) => {
    const new_person= new person({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        email: req.body.email,
    });

    try{
        const savedPerson= await new_person.save();
        res.json(savedPerson);
    }catch(err){
        res.json({message: err});
    }
});


//update information of an existing person

router.put("/:id",async(req, res)=>{
    try {
        const updated_person = await person.updateOne(
            {_id: req.params.id},
            {
                $set:{
                    first_name : req.body.first_name,
                    last_name : req.body.last_name,
                    age : req.body.age,
                    email : req.body.email,
                },
            }
        );
        res.json(updated_person);
    } catch (err) {
        res.json({message: err});
    }
});


//delete record of a person
router.delete("/:id", async(req, res) => {
    try {
        const deleted_person = await person.remove({ _id : req.params.id});
        res.json(deleted_person);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports=router;