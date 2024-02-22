   let mongoose=require('mongoose')
   let express= require('express')
   let app = express()
   let userRoutes = require('./routes/user')
   let loginRoutes = require('./routes/login')
   let resturentRoutes = require('./routes/resturent')
   let ProductRoutes  = require('./routes/product')


   mongoose.connect('mongodb://127.0.0.1:27017/zomato')
   .then(()=>{
    console.log('db');
   }).catch((err)=>{
    console.log(err);
   })

   app.use('/api',userRoutes)
   app.use('/api',loginRoutes)
   app.use('/api',resturentRoutes)
   app.use('/api',ProductRoutes)

   

  app.listen(4000,()=>{
    console.log('srrver on hai');
   })