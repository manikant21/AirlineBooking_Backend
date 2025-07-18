import express from 'express';
import { infoController } from '../../controllers/index.js';

const router = express.Router();

router.get('/info', infoController);

export {router};