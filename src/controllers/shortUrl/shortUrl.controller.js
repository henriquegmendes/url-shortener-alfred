import repository from './shortUrl.repository';
import shortUrlValidation from './shortUrl.validation';
import { errorRedirect, logger } from '../../utils';

const { logInfo, logSuccess, logError } = logger;

class ShortUrlController {
  create = async (req, res, next) => {
    const { body } = req;
    const endpoint = '/link/create';
    const method = 'create-controller';

    try {
      logInfo(endpoint, method, body);

      const newUrl = await repository.create(body);

      const response = { shortUrl: `${process.env.SHORT_URL_BASE}/${newUrl._id}` };

      logSuccess(endpoint, method, body, response);

      res.status(200).json(response);
    } catch (err) {
      logError(endpoint, method, body, err);

      next(err);
    }
  }

  redirect = async (req, res, next) => {
    const { id } = req.params;
    const endpoint = '/link/:id';
    const method = 'redirect-controller';

    try {
      logInfo(endpoint, method, req.params);

      const url = await repository.findOne(id);

      if (!shortUrlValidation.isRedirectUrlValid(url)) {
        logError(endpoint, method, req.params, { err: 'Link expirado' });

        errorRedirect.deliverExpirationUrlPage(res);
        return;
      }

      logSuccess(endpoint, method, req.params, url);

      res.status(301).redirect(url.redirectUrl);
    } catch (err) {
      logError(endpoint, method, req.params, err);

      errorRedirect.deliverErrorUrlPage(res);
    }
  }
}

export default new ShortUrlController();
