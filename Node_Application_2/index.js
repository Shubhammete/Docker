const express = require('express')

const app = express()
const port = 8080

app.get("/",(req,res)=>{
    return res.json({message:"Hello from Shubham, this is my First Docker Image 🐳"})
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})
