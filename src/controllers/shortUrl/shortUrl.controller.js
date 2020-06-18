import repository from './shortUrl.repository';
import schema from './shortUrl.validation';
import { errors, errorRedirect, logger } from '../../utils';

const { logInfo, logSuccess, logError } = logger;
const { applicationError } = errors;

class ShortUrlController {
  create = async (req, res, next) => {
    const { body } = req;
    const endpoint = '/link/create';
    const method = 'create-controller';

    try {
      logInfo(endpoint, method, body);

      const errorSchema = schema.getErrorsCreateParams(body);

      if (errorSchema) {
        applicationError({ message: errorSchema, status: 400 });
      }

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

      if (!schema.isRedirectParamsValid(id)) {
        logError(endpoint, method, req.params, { err: 'id inválido' });

        errorRedirect.deliverExpirationUrlPage(res);
        return;
      }

      const url = await repository.findOne(id);

      if (!schema.isRedirectUrlValid(url)) {
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
