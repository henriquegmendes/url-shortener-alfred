import Url from '../../models/Url';
import { errors } from '../../utils';

const { applicationError } = errors;

class ShortUrlRepository {
  create = async newUrlParams => {
    try {
      const newUrl = await Url.create(newUrlParams);

      return newUrl;
    } catch (err) {
      applicationError({ message: err.message, status: 502 });
    }
  }

  findOne = async urlId => {
    try {
      const oneUrl = await Url.findOne({ _id: urlId });

      return oneUrl;
    } catch (err) {
      applicationError({ message: err.message, status: 502 });
    }
  }
}

export default new ShortUrlRepository();
