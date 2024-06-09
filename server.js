let express = require("express");
let fs = require("fs").promises;
let path = require("path");

let app = express();

app.use("/api",require("./api/api"));

app.get("/",(req,res)=>{
res.send("hello")
})
app.get('*',async(req,res)=>{
    let data = await fs.readFile(path.join(__dirname,req.url),"");
    res.sendFile(path.join(__dirname,req.url));
})

app.listen(process.env.PORT || 3500,()=>{
    console.log("server runing");
})
