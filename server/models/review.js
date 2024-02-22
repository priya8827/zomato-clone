


         let revewSchema=new mongoose.Schema ({

    user_Id:[{
        type:Schema.Type.ObjectId,
        ref:'User'
    }],
    review:{
        type:String
    }

})
let Review=mongoose.model('Review',ratingSchema)
module.exports=Review