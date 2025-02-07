const express = require('express');
const app = new express();
reqCount = 0;
function middleware(req,res,next){
    reqCount += 1;
    console.log(`this is req no. - ${reqCount}`);
    console.log(`The method used is ${req.method}`);
    console.log(`Requested URL Path: ${req.url}`);
    console.log(`Requested hostname: ${req.hostname}`);
    var ts = new Date().toISOString();
    console.log(`Date and Time : ${ts}`)
    next();
}
app.get("/",function(req,res){
    res.json({
        "Total No of Req Rcvd" : reqCount
    })
})
app.use(middleware);
app.get("/add",function(req,res){
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    const ans = a+b;
    res.send("Your answer is " + ans);
})
app.get("/sub",function(req,res){
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    const ans = a-b;
    res.send("Your answer is " + ans);
})
app.get("/mul",function(req,res){
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    const ans = a*b;
    res.send("Your answer is " + ans);
})
app.get("/div",function(req,res){
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    const ans = a/b;
    res.send("Your answer is " + ans);
})
app.listen(3000);
