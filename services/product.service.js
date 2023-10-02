const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://mmoaziopswaqzwwiadgy.supabase.co";

const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

//PRODUCT CREATING SERVICE
exports.createProduct = async (req, res) => {
    const productData = await supabase.from('products').select('*').eq('name', req.body.name);
    if (productData.data.length) {
        res.json({
            message: 'Product already exist'
        })
        return;
    }
    const { error, data } = await supabase.from('products').insert(req.body);
    if (error) {
        res.status(400).json({
            data,
            message: error.message
        })
        return;
    }
    res.status(200).json({
        data,
        message: 'product created successfully.'
    })
}
//PRODUCTS GETTING SERVICES
exports.getProducts = async (req, res) => {
        const { data, error } = await supabase.from('products').select('*');
        if (error) {
            res.status(400).json({
                data: [],
                message: 'Something went wrong.'
            })
            return;
        }
        res.status(200).json({
            data,
            message: 'products found successfully.'
        })
}

//PRODUCT UPDATE SERVICE
exports.updateProduct = async (req, res) => {
        const { id } = req.params;
        const { status,data, error } = await supabase.from('products').update(req.body).eq('id', id);
        if (error) {
            res.status(400).json({
                data: [],
                message: 'Something went wrong.'
            })
            return;
        } else if (status == 204) {
            res.status(200).json({
                data,
                status,
                message: 'Product updated successfully.'
            })
        } else {
            res.status(404).json({
                message: "No data found with the id."
            })
        } 
}
//DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
        const { id } = req.params;
        const { status, error } = await supabase.from('products').delete().eq('id', id);

        if (error) {
            res.status(400).json({
                data: [],
                message: 'Something went wrong.'
            })
            return;
        } else if (status == 204) {
            res.status(200).json({
                data,
                status,
                message: 'Product delete successful.'
            })
        } else {
            res.status(404).json({
                message: "No data found with the id."
            })
        } 
}