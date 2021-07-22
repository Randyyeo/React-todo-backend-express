const { Router } = require("express");
const db = require("../database");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await db.promise().query(`Select * from list`);
    console.log(result[0]);
    result[0].map((task)=>{
      let old_date = task.day.toString()
      const date = old_date.substr(0,10);
      task.day = date;
      
      return task
    })
  
    res.status(200).send(result[0]);
  } catch (err) {
    console.log(err);
  }
});

router.post("/todo", async (req, res) => {
  const { text } = req.body;

  try {
    const result = await db
      .promise()
      .query(`Select * from list where text like '%${text}%'`);
      result[0].map((task)=>{
        let old_date = task.day.toString()
        const date = old_date.substr(0,10);
        task.day = date;
        
        return task
      })
    res.status(200).send(result[0]);
  } catch (err) {
    console.log(err)
    res.status(404).send("Not found");
  }
});

router.post("/date", async (req, res) => {
  const { min, max } = req.body;
  
  try {
    const result = await db
      .promise()
      .query(`select * from list where day >= '${min}' and day <= '${max}'`);
      result[0].map((task)=>{
        let old_date = task.day.toString()
        const date = old_date.substr(0,10);
        task.day = date;
      
        return task
      })
    res.status(200).send(result[0]);
  } catch (err) {
    console.log(err)
    res.status(404).send("Not found")
  }
});

module.exports = router;
