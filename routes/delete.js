const { Router } = require('express');
const db = require("../database");

const router = Router();

router.post('/', async (req, res)=>{
    const { id } = req.body;
    try {
        const result = await db.promise().query(`delete from list where id=${id}`);
        if (result[0].affectedRows > 0){
            try {
                const finds = await db.promise().query(`select * from list`);
                
                finds[0].map((task)=>{
                    let old_date = task.day.toString()
                    const date = old_date.substr(0,10);
                    task.day = date;
                    
                    return task
                  })
                res.status(200).send(finds[0]);
            } catch(err){
                console.log(err)
            }
            
        }
        
    } catch(err){
        console.log(err)
    }
})



module.exports = router;