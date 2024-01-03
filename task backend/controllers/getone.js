const thetasks = require("../schema/schema");




const getone=async(req,res)=>{
     
 const id=req.params.id
console.log(id)

try {
    const   all= await thetasks.findById(id)
    res.json(all)
} catch (error) {
    console.log(error)
}






}
module.exports=getone