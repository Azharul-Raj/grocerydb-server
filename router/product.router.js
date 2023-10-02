const express=require('express');
const productServices=require('../services/product.service');

const router=express.Router();

router.route('/products')
.get(productServices.getProducts)

module.exports=router;