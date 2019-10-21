import BaseServices from '../../../lib/bases/BaseServices'
import model from '../models/Contacts.model'

export default class ContactsServices extends BaseServices {

    constructor() {
      super(model)
    }

}
