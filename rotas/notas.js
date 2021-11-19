const {Router} = require("express");
const router = Router();

router.get("/:id?", (req, res)=>{
    const {id} = req.params;
    if (id){
        res.send('Nota ID' + id);
    }else{
        res.send("Todas as notas");
    }

});
router.post("/", (req, res) =>{
    res.send("post notas")
});

router.put("/:id", (req,res) =>{
    res.send({});
});

router.delete("/:id", (req, s) =>{
    res.send({});
});

module.exports = router;