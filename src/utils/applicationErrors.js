class ApplicationError extends Error {
  constructor(params) {
    super();

    this.message = params.message || 'Houve um erro inesperado. Por favor tente novamente.';
    this.status = params.status || 500;
  }
}

class ErrorHandler {
  catchErrorType = (err) => ({
    message: err.message || 'Ocorreu um erro na aplicação. Por favor tente novamente mais tarde',
    status: err.status || 500,
  });

  handleError = (err, req, res, next) => {
    const { status, message } = this.catchErrorType(err);

    res.status(status || '').send({ message, status });
  }

  applicationError = params => {
    throw new ApplicationError(params);
  }
}

export default new ErrorHandler();
