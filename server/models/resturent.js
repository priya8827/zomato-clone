let mongoose=require('mongoose')
     let  resturentSchema=new mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        address:{
            type:String,

        },
        description:{
            type:String,
            require:true
        },
        contact_no:{
            type:Number,
            require:true
        },
        opening_time:{
            type:Date,
            require:true
        },
        image:{
            type:String,
            require:true
        }

        })
        let Resturent  = mongoose.model('Resturent',resturentSchema)
           module.exports=Resturent