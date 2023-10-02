const express= require('express');
require('dotenv').config();
const cors=require('cors');
const {createClient} =require('@supabase/supabase-js');
const productRouter=require('./router/product.router');

const app=express();
app.use(cors());
app.use(express.json());
const port=process.env.PORT || 3001;


app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})
app.get('/',(req,res)=>{
    res.send('Server is up and running.')
})
app.use('/api/v1',productRouter);