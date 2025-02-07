const express = require('express')
const app = new express();
app.get("/add", function(req,res){
    const a  = parseInt(req.query.a, 10);
    const b  = parseInt(req.query.b, 10);
    const ans = a+b;
    res.send("Your answer is = " +ans);
}) 
app.get("/sub", function(req,res){
    const a  = parseInt(req.query.a, 10);
    const b  = parseInt(req.query.b, 10);
    const ans = a-b;
    res.send("Your answer is = " +ans);
})
app.get("/mul", function(req,res){
    const a  = parseInt(req.query.a, 10);
    const b  = parseInt(req.query.b, 10);
    const ans = a*b;
    res.send("Your answer is = " +ans);
})
app.get("/div", function(req,res){
    const a  = parseInt(req.query.a, 10);
    const b  = parseInt(req.query.b, 10);
    const ans = a/b;
    res.send("Your answer is = " +ans);
})
app.listen(3030)
