var exp = require('express');
var app = exp();

app.get('/TarunForm', function (req, res) {
    res.sendFile(__dirname + "/TarunForm.html");
})

app.listen(9000, function () {
    console.log("exp app - 9000");
})