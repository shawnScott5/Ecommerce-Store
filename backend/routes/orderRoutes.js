import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/', protect, addOrderItems)
router.get('/myorders', protect, getMyOrders)

router.put('/:id/pay', protect, updateOrderToPaid)
router.get('/:id', protect, getOrderById)



export default router