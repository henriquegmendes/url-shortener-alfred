import Joi from 'joi';
import {
  validation, shortId, dateManager, errorRedirect, logger,
} from '../../utils';

const { redirectUrl, expirationDateMs } = validation;
const { logError } = logger;

class ShortUrlValidation {
  constructor() {
    this.createSchema = Joi.object()
      .options({
        abortEarly: false,
      })
      .keys({
        redirectUrl,
        expirationDateMs,
      });
  }

  verifyCreateUrlParams = (req, res, next) => {
    const { body } = req;
    const endpoint = '/link/create';
    const method = 'create-validation';

    const paramsValidationErrors = validation.validateParams(body, this.createSchema);

    if (paramsValidationErrors) {
      logError(endpoint, method, body, paramsValidationErrors);

      res.status(400).json({ message: paramsValidationErrors, status: 400 });
      return;
    }

    next();
  }

  verifyRedirectUrlParams = (req, res, next) => {
    const { id } = req.params;
    const endpoint = '/link/:id';
    const method = 'redirect-validation';

    if (!shortId.isIdValid(id)) {
      logError(endpoint, method, req.params, { err: 'id inválido' });

      errorRedirect.deliverExpirationUrlPage(res);
      return;
    }

    next();
  }

  isRedirectUrlValid = urlParams => {
    const isUrlNotValidValid = (
      !urlParams || urlParams.expirationDateMs < dateManager.getCurrentTimeMs()
    );

    if (isUrlNotValidValid) return false;

    return true;
  }
}

export default new ShortUrlValidation();
