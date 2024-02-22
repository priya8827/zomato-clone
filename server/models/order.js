const mongoose= require("mongoose")



let orderSchema=new mongoose.Schema ({
    user_Id:[{
        type:Schema.type.objectId,
        ref:'User'
    }],
    resturent_Id:[{
        type:Schema.Type.ObjectId,
        ref:"Resturent"

    }],
    price:{
        type:Number
    },
    status:{
        type:String,
        enum:['pending','conformed','delivered'],
        default:"pending"
    }
        
    

})
let Order=mongoose.model('Order',orderSchema)
module.exports=Order