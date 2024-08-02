const http = require("http")
const express=require("express");
const app = express()

app.use(express.json({limit:50}))
app.use(express.urlencoded({extended:true,limit:50}))
function getAllUser(req,res){
res.status(200).json({
	user:{name:"first"}
})	
	
}
app.get("/api/user/all",getAllUser);
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
	console.log("Server listening on port ",PORT)
})
