const express = require('express');
const app = new express();
app.use(express.json());
app.post("/sum",function(req,res){
    const a = req.body.a;
    const b = req.body.b;
    res.json({
        answer: a+b
    })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
