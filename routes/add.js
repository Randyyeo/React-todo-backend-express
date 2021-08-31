const { Router } = require("express");
const Todo = require('../models/todo.js');
const auth = require("../middleware/auth.js");



const router = Router();
router.use(auth)

router.post("/", async (req, res) => {
  const { text, day, reminder, userId } = req.body;
  console.log(req.body)
  try {
    const result = await Todo.insertMany({ userId, text, day, reminder, })
    console.log(result)
    res.status(201).send({message: "Succesfully added"})
    /* if (result[0].affectedRows > 0) {
        try {
            const finds = await db.promise().query(`select * from list`);
            finds[0].map((task)=>{
              let old_date = task.day.toString()
              const date = old_date.substr(0,10);
              task.day = date;
      
              return task
            })
            res.status(200).send(finds[0]); */
           
    
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
