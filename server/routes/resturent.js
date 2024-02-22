const express = require('express');
const router = express.Router();
 let Restraurant=  require('../models/resturent')


//  create api for restraurant

 router.post('/restro', async (req,res)=>{
        try{   
              let resturent=   new Restraurant(req.body)
               await  resturent.save()
               res.status(201).send(resturent)

        }
        catch(err){
            console.log(err, 'errrr');
            res.status(402).send('err')

        }
 })

//   get all Restraurant 
 router.get('/restro',  async (req,res)=>{  

    try{
        let resturent=  await Restraurant.find()
        if(!resturent){

          res.send('restraurant not foundddd')
          
        }
        else{
            res.send(resturent)
        }

    }
    catch{

    }

 })

 router.get('/restro/:id',  async (req,res)=>{


     try{
        let resturent=    await   Restraurant.findById(req.params.id)
        if(!resturent){
           res.status(404).send('not found')

        }
        else{
            res.send(resturent)
        }

     }
     catch{
        res.send('err')
     }
         
 })

 // updateted
  router.patch('/restro/:id', async (req,res)=>{
        try{   
            let resturent=   await Restraurant.findByIdAndUpdate(req.params.id,req.body,{new:true})
             if(!resturent){
                res.status(402).send('not updateded')
             }
             else{
             res.send(resturent)
             }

      }
      catch(err){
          console.log(err, 'errrr');
    

      }
    })
      //deleted........
      router.delete('/restro/:id', async (req,res)=>{
        try{   
            let resturent=   await Restraurant.findByIdAndDelete(req.params.id,{new:true})
             if(!resturent){
                res.status(402).send('not deleted')
             }
             else{
             res.send(resturent)
             }
            }
            catch(err){
                console.log(err, 'errrr');
                res.send(err)
          
      
            }
})



module.exports = router