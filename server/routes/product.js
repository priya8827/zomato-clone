const express = require('express');
const router = express.Router();
 let Product=  require('../models/product')

//create api for resturent..

router.post('/product',async (req,res)=>{
    try{   
          let product=new Product(req.body)
           await  product.save()
           res.status(201).send(product)
        // res.send('jdfdfh')


    }
    catch(err){
        console.log(err, 'errrr');
        res.status(402).send('err')

    }
})

router.get('/product',  async (req,res)=>{  

    try{
        
          let product=  await Product.find()
        if(!product){

          res.send('product not foundddd')
          
        }
        else{
            res.send(product)
        }

    }
    catch{

    }

 })

 router.get('/product/:id',  async (req,res)=>{


     try{
        let product=    await   Product.findById(req.params.id)
        if(!product){
           res.status(404).send('not found')

        }
        else{
            res.send(product)
        }

     }
     catch{
        res.send('err')
     }
         
 })

 // updateted
  router.patch('/product/:id', async (req,res)=>{
        try{   
            let product=   await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
             if(!product){
                res.status(402).send('not updateded')
             }
             else{
             res.send(product)
             }

      }
      catch(err){
          console.log(err, 'errrr');
    

      }
    })
      //deleted........
      router.delete('/product/:id', async (req,res)=>{
        try{   
            let product=   await Product.findByIdAndDelete(req.params.id,{new:true})
             if(!product){
                res.status(402).send('not deleted')
             }
             else{
             res.send(product)
             }
            }
            catch(err){
                console.log(err, 'errrr');
                res.send(err)
          
      
            }
})



module.exports = router