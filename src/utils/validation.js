import Joi from 'joi';
import regexValidator from './regexValidator';

class Validation {
  constructor() {
    this.redirectUrl = Joi.string()
      .required()
      .min(5)
      .max(1000)
      .regex(regexValidator.urlRegex)
      .options(this.validation('URL de Redirecionamento', 5, 1000, 'http(s)://yoursite.com.br'));

    this.expirationDateMs = Joi.date()
      .required()
      .timestamp('javascript')
      .min('now')
      .options(this.validation('Data de Expiração da URL em Milisegundos'));
  }

  validation = (field, min, max, mask) => ({
    language: {
      any: {
        required: `${field} é Obrigatório`,
        empty: `${field} é Obrigatório`,
      },
      string: {
        min: `${field}: campo de no mínimo ${min} caracteres`,
        required: `${field} é Obrigatório`,
        max: `${field}: campo de no máximo ${max} caracteres`,
        email: `${field}: necessário preencher campo em um formato válido`,
        base: `${field}: campo do tipo string`,
        regex: {
          base: mask ? `Necessário enviar o campo na máscara ${mask}` : '',
        },
      },
      number: {
        base: `${field}: campo do tipo numérico`,
        min: `${field}: deve ser maior ou igual a {{limit}}`,
        max: `${field}: deve ser menor ou igual a {{limit}}`,
        less: `${field}: deve ser menor que {{limit}}`,
        greater: `${field}: deve ser maior que {{limit}}`,
        required: `${field} é Obrigatório`,
      },
      date: {
        required: `${field} é Obrigatório`,
        min: `${field} deve ser maior ou igual a {{limit}}`,
        timestamp: {
          javascript: `${field}: campo deve estar em milisegundos`,
        },
      },
    },
  });

  getJoiErrors = errorDetails => errorDetails.map(error => ({
    error: error.message.split('" ')[1],
    field: error.context.key,
  }));

  validateParams = (params, schema) => {
    const joiValidation = Joi.validate(params, schema);
    if (joiValidation.error) {
      return this.getJoiErrors(joiValidation.error.details);
    }

    return null;
  }
}

export default new Validation();
