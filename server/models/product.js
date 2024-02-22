

let mongoose  = require('mongoose')
         let productSchema=new mongoose.Schema ({
    name:{
        type:String,
        require:true
        
    },
    description:{
        type:String,
        require:true
        
    },
    Price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
       require:true
    }

})
let Product=mongoose.model('Product',productSchema)
module.exports=Product