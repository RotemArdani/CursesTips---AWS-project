import express from 'express';
import { getAllTips, createTip, deleteTip } from '../controllers/tips.controller.js';

const router = express.Router();

router.get('/:courseName', getAllTips);
router.post('/:courseName', createTip);
router.delete('/:tipId', deleteTip);

export default router;
