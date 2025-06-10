import express from 'express';
import salesController from '../controllers/sales.controller.js';

const router = express.Router();


router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getSaleById);
router.post('/', salesController.createSale);

export default router;
