import express from'express';

const app = express();

app.get("/" ,(req,res) =>{
    res.send("this is from server");
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})