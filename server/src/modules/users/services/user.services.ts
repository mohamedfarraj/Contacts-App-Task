import BaseServices from '../../../lib/bases/BaseServices'
import model from '../models/user.model'

export default class UserServices extends BaseServices {
  constructor() {
    super(model)
  }
}
