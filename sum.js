const express = require('express');
const app = express();
app.get('/', function (req, res) {
    const n = parseInt(req.query.n, 10);
    const ans = sum(n);
    res.send("Your answer is = " + ans)
    })
app.listen(3030);
function sum(n){
    return ((n*(n+1))/2);
}