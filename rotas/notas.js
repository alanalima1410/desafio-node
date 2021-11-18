const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("GET notas");
});
router.post("/", function (req, res){
    res.send("post notas")
});

router.put("/:id", function(req,res){
    res.send({});
});

router.delete("/:id", function (req, res) {
    res.send({});
});

module.exports = router;