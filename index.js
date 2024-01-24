const ex=require("express");
const app=ex();
app.get("/",(req,res)=>{
    res.json([
        {
            id:1,
            name:"Ram",
            age:56
        },
        {
            id:1,
            name:"Ram",
            age:56
        },
        {
            id:1,
            name:"Ram",
            age:56
        }
    ])
})
app.listen(8080,()=>{
    console.log("app is running ");
})
