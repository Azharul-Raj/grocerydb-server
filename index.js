const express= require('express');
require('dotenv').config();
const cors=require('cors');
const {createClient} =require('@supabase/supabase-js');
const productRouter=require('./router/product.router');

const app=express();
app.use(cors());
app.use(express.json());
const port=process.env.PORT || 3001;

const SUPABASE_URL = "https://mmoaziopswaqzwwiadgy.supabase.co"

const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})

app.use('/api/v1',productRouter);