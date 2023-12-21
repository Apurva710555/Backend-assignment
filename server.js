const express = require('express');
const app = express();

//routes
app.get('/', (req, res)=>{
      res.send("hello world");
})
app.listen(3000, ()=>{
  console.log("Node Api Running")
})