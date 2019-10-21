import BaseController from '../../../lib/bases/BaseController'
import ContactsServices from '../services/contacts.services'
const contactServices: ContactsServices = new ContactsServices()
export default class ContactsController extends BaseController {

  constructor() {
    super(contactServices)
  }

}
