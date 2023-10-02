const {createClient} =require('@supabase/supabase-js');

const SUPABASE_URL = "https://mmoaziopswaqzwwiadgy.supabase.co";

const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

//PRODUCT CREATING SERVICE
exports.createProduct=async(req,res)=>{
    try {
        const {name,price,image,description}=req.body;
        const {data,errors}= await supabase.from('products').insert([{name,price,image,description}]);
        if(errors){
            res.status(400).json({
                data:[],
                message:'Something went wrong.'
            })
            return;
        }
        res.status(200).json({
            data,
            message:'Response successful.'
        })
    } catch (error) {
        res.status(500).json({
            data:[],
            message:'Error fetching the products.'
        })
    }
}
//PRODUCTS GETTING SERVICES
exports.getProducts=async(req,res)=>{
    try {
        const {data,errors}= await supabase.from('products').select('*');
        if(errors){
            res.status(400).json({
                data:[],
                message:'Something went wrong.'
            })
            return;
        }
        res.status(200).json({
            data,
            message:'Response successful.'
        })
    } catch (error) {
        res.status(500).json({
            data:[],
            message:'Error fetching the products.'
        })
    }
}

//PRODUCT DELETING SERVICE
exports.deleteProduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const {data,errors}= await supabase.from('products').delete().eq('id',id);
        if(errors){
            res.status(400).json({
                data:[],
                message:'Something went wrong.'
            })
            return;
        }
        res.status(200).json({
            data,
            message:'Product delete successful.'
        })
    } catch (error) {
        res.status(500).json({
            data:[],
            message:'Error fetching the products.'
        })
    }
}