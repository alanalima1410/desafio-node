const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("notas");
    
});
router.post("/", function (req, res){
    console.log(req.body);

    res.send("post usuario")
});
router.put("/:id", function(req,res){
    res.send({});
});

router.delete("/:id", function (req, res) {
    res.send({});
});

module.exports = router;