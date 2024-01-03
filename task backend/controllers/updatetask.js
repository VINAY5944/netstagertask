const thetasks = require("../schema/schema");
const updatetask=async(req,res)=>{
    const {id}=req.params.id
    const {title,description,date,status}=req.body;


    try {
        const update= await thetasks.findByIdAndUpdate(id,{title,description,date,status});
        res.json(update)
    } catch (error) {
     console.log(error)   
    }

      
    
  }  


  module.exports=updatetask