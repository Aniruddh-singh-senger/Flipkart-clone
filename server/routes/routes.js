
import express from  'express';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { userSignup, userLoginIn } from '../controller/user-controller.js';


const router = express.Router();

//login & signup
router.post('/signup', userSignup);
router.post('/login', userLoginIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);




export default router;