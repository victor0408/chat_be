var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.get("/", (req, res, next) => {
    res.json(["Tony12","Lisa","Michael","Ginger","Food"]);
});

console.log('Listening on http://localhost:' + port);