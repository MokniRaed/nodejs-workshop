const express = require("express")

const port = 5100
const app = express()


app.get("/welcome",(req,res)=>{
    res.send("Hello bro ✌️😍")
})

app.listen(port,()=>{
    console.log(`we are running on express ${port}..`);
})