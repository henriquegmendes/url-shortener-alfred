class RegexValidator {
  constructor() {
    this.urlRegex = /^(?:http(s)?:\/\/)+[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
  }
}

export default new RegexValidator();
