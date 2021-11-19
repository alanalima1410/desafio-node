const {Router} = require("express");
const router = Router();

router.get("/", (req, res)=>{
    res.send("notas");
    
});
router.post("/",  (req, res)=>{
    console.log(req.body);

    res.send("post usuario")
});
router.put("/:id", (req,res)=>{
    res.send({});
});

router.delete("/:id", (req, res)=> {
    res.send({});
});

module.exports = router;