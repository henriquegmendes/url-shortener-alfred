import { Router } from 'express';
import shortUrlController from '../../controllers/shortUrl/shortUrl.controller';
import shortUrlValidation from '../../controllers/shortUrl/shortUrl.validation';

const router = Router();

router.post('/create', shortUrlValidation.verifyCreateUrlParams, shortUrlController.create);

router.get('/:id', shortUrlValidation.verifyRedirectUrlParams, shortUrlController.redirect);

export default router;
