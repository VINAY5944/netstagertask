const thetasks = require("../schema/schema");




const getall=async(req,res)=>{
     
 


try {
    const   all= await thetasks.find()
    res.json(all)
} catch (error) {
    console.log(error)
}






}

module.exports=getall