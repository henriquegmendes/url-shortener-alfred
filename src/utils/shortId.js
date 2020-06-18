import { generate, isValid } from 'shortid';

class ShortIdUtils {
  generateId = () => generate();

  isIdValid = id => isValid(id);
}

export default new ShortIdUtils();
