class Logger {
  generateLogBody = ({
    type, endpoint, method, success, err, bodyRequest, bodyResponse,
  }) => ({
    '@timestamp': new Date().toISOString(),
    type,
    endpoint,
    method,
    success,
    err,
    bodyRequest,
    bodyResponse,
  })

  generateLog = params => {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(this.generateLogBody(params)));
  }

  logError = (endpoint, method, bodyRequest, err) => this.generateLog({
    type: 'ERROR',
    endpoint,
    method,
    success: false,
    error: err,
    bodyRequest,
  })

  logSuccess = (endpoint, method, bodyRequest, bodyResponse) => this.generateLog({
    type: 'SUCCESS',
    endpoint,
    method,
    success: true,
    bodyRequest,
    bodyResponse,
  })

  logInfo = (endpoint, method, bodyRequest) => this.generateLog({
    type: 'INFO',
    endpoint,
    method,
    bodyRequest,
  })
}

export default new Logger();
