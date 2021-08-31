const { Router } = require("express");
const db = require("../database");
const auth = require("../middleware/auth.js");
const Todo = require("../models/todo.js");
const router = Router();

router.use(auth);

router.post("/", async (req, res)=>{
    const { id, text, day, reminder } = req.body;
    console.log(day)
    try {
        const result = await Todo.findOneAndUpdate({ "_id": id }, { "$set": { text: text, day: day, reminder: reminder } })
        console.log(result)
        res.status(200).json({message: "Successfully updated"})
        
        
    } catch(err){
        console.log(err)
    }
})



module.exports = router