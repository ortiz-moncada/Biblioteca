const mongoose = require("mongoose");
const holderSchema=new mongoose.Schema({ 
        email:{type:String, required:true,unique:true}, 
        password:{type:String,minlength:8,required:true},   
        document:{type:String,required:true,unique:true},     
        name:{type:String,required:true}, 
        rol:{type:String,required:true,
        default:'APRENDIZ'},
        phone:{type:String,required:true},         
        state:{type:String,default:1}, 
    },{
        timestamps:true,
    }
);

 module.exports=mongoose.model("holders",holderSchema)