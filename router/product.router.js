const express=require('express');
const productServices=require('../services/product.service');

const router=express.Router();

router.route('/products')
.get(productServices.getProducts)
.post(productServices.createProduct)


router.route('/products/:id')
.patch()
.delete(productServices.deleteProduct);

module.exports=router;