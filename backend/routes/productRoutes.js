import express from 'express'
const router = express.Router()
import { getProducts, getProductById, getTopProducts } from '../controllers/productController.js'

router.get('/', getProducts)
router.get('/:id', getProductById)
router.get('/top', getTopProducts)

export default router