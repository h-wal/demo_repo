const express = require('express')
const app = new express();
let reqCount = 0;
function requestIncreaser(req,res,next){
    reqCount += 1;
    console.log("Total No of Requests Rcvd = "+reqCount);
    next();
}
app.get("/",function(req,res){
    res.json("No of req = "+reqCount)
    console.log("No of req"+reqCount)
})
app.get("/add", requestIncreaser, function(req,res){
    const a  = parseInt(req.query.a, 10);
    const b  = parseInt(req.query.b, 10);
    const ans = a+b;
    res.send("Your answer is = " +ans);
}) 
app.get("/sub", requestIncreaser, function(req,res){
    const a  = parseInt(req.query.a, 10);
    const b  = parseInt(req.query.b, 10);
    const ans = a-b;
    res.send("Your answer is = " +ans);
})
app.get("/mul", requestIncreaser, function(req,res){
    const a  = parseInt(req.query.a, 10);
    const b  = parseInt(req.query.b, 10);
    const ans = a*b;
    res.send("Your answer is = " +ans);
})
app.get("/div", requestIncreaser, function(req,res){
    const a  = parseInt(req.query.a, 10);
    const b  = parseInt(req.query.b, 10);
    const ans = a/b;
    res.send("Your answer is = " +ans);
})
app.listen(3030)
