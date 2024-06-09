let express = require("express");
let router  = express.Router();
let fs = require("fs").promises;
let path = require("path");

router.get("/",async(req,res)=>{
let data =await fs.readFile(path.join(__dirname,"data.json"),"utf8")
res.json(JSON.parse(data))
console.log(data);

})
router.post("/",async(req,res)=>{
    
    let data1 =await fs.readFile(path.join(__dirname,"data.json"),"utf8");
    let newData = JSON.parse(data1);
    newData = [...newData,{"new2":"4.6"}];
let data = await fs.writeFile(path.join(__dirname,"data.json"),JSON.stringify(newData));
res.send("posted mf")
});
module.exports = router;