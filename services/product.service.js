const {createClient} =require('@supabase/supabase-js');

const SUPABASE_URL = "https://mmoaziopswaqzwwiadgy.supabase.co";

const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

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
