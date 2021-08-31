const { Router } = require("express");
const db = require("../database");
const auth = require("../middleware/auth.js");
const Todo = require("../models/todo.js");

const router = Router();
router.use(auth);
router.post("/", async (req, res) => {
  const { userId, id } = req.body;
  try {
    const result = await Todo.deleteOne({ "userId" : userId, "_id" : id });
    console.log(result)
    res.status(200).json({ message: "Successfully deleted"})
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
