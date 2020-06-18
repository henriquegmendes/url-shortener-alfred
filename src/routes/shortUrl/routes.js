import { Router } from 'express';
import shortUrlController from '../../controllers/shortUrl/shortUrl.controller';

const router = Router();

router.post('/create', shortUrlController.create);

router.get('/:id', shortUrlController.redirect);

export default router;
