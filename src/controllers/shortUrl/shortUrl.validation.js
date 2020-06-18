import Joi from 'joi';
import { validation, shortId, dateManager } from '../../utils';

const { redirectUrl, expirationDateMs } = validation;

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

  getErrorsCreateParams = params => {
    const paramsValidationErrors = validation.validateParams(params, this.createSchema);

    if (paramsValidationErrors) return paramsValidationErrors;

    return null;
  }

  isRedirectParamsValid(id) {
    return shortId.isIdValid(id);
  }

  isRedirectUrlValid = urlParams => {
    const isValid = !urlParams || urlParams.expirationDateMs < dateManager.getCurrentTimeMs();

    if (isValid) return false;

    return true;
  }
}

export default new ShortUrlValidation();
