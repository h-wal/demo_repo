//this calculator take 2 arguments given by the 2 next immediate route handlers
const express = require('express')
const app = new express();
app.get("/add/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a+b
    })
})
app.get("/sub/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a-b
    })
})
app.get("/mul/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a*b
    })
})
app.get("/div/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a/b
    })
})
app.listen(2000)