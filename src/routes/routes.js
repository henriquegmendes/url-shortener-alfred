import { Router } from 'express';
import shortUrlRoutes from './shortUrl/routes';

const router = Router();

router.use('/link', shortUrlRoutes);

export default router;
