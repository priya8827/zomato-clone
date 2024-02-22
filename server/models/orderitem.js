
  let mongoose=require('mongoose')

let orderitemSchema=new mongoose.Schema ({
    menu_Id:[{
        type:mongoose.Schema.type.objectId,
        ref:'Menu'
    }],
    quantity:{
        type:Number
    }

})
let OrderItem=mongoose.model('OrderItem',orderitemSchema)
module.exports=OrderItem