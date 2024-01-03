const mongoose=require('mongoose')
const thetaskschema=mongoose.Schema({
title:{type:String},
description:{type:String},
date:{type:Date},
status:{type:Boolean}
})

const thetasks=mongoose.model("thetask",thetaskschema);
module.exports=thetasks;