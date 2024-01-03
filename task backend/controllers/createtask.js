const thetasks = require("../schema/schema");



const newtask=async(req,res)=>{



const {title,description,date,status}=req.body;

try {
    const thetask= await thetasks.create({
       title:title,description:description,date:date,
        status:status
    })

    res.json(thetask)
} catch (error) {
   console.log(`${error}`); 
}

}
module.exports=newtask