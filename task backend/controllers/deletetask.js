const thetasks = require("../schema/schema");

const deltask=async(req,res)=>{
    
    const deleteid=req.params.id
try {
    const getemp=await thetasks.findByIdAndDelete(deleteid)
    res.json('deleted')
} catch (error) {
    console.log(error)
}

}

module.exports=deltask