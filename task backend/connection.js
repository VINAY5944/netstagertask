const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config()
const connection=async()=>{

    try{
const connect=await mongoose.connect(process.env.mongooseconnectionstring

)
console.log('database is set');
}
    catch(err){
    console.log(`the error is ${err}`);
    process.exit();
    }


}

module.exports=connection