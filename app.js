const express = require("express")
const db = require("./database/connection")
const app = express()
const port = 3000;

app.get('/books',(req,res)=>{

  res.json({
    message: "Books fetched successfully"
  })
});

app.post('/books',(req,res)=>{
  
  res.json({
    message: "Books added successfully"
  })
});

app.patch('/books/:id',(req,res)=>{
  
  res.json({
    message: "Books updated successfully"
  })
});

app.delete('/books/:id',(req,res)=>{
  
  res.json({
    message: "Books deleted successfully"
  })
});


app.listen(port,()=>{
  console.log(`server is running at port ${port}`);
});