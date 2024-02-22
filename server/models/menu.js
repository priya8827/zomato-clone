

            const mongoose= require("mongoose")
         let menuSchema=new mongoose.Schema ({
            name:{
                type:String,
                
            },
            price:{
                type:Number,
                
    
            },
            description:{
                type:String,
                
            },
})
let Menu=mongoose.model('Menu',menuSchema)
module.exports=Menu