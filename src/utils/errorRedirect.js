import path from 'path';

class ErrorRedirect {
  deliverExpirationUrlPage = res => {
    res.sendFile(path.join(__dirname, '../', 'views', 'expired.html'));
  }

  deliverErrorUrlPage = res => {
    res.sendFile(path.join(__dirname, '../', 'views', 'error.html'));
  }
}

export default new ErrorRedirect();
