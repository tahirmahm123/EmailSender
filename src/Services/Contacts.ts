import {_get, _post} from './Generic';
import {Contact, SendEmailToEmails} from '../types';
const find = () => _get<Contact>('/contacts');
const store = (data: Contact) => _post('/contacts', data);
const email = (data: SendEmailToEmails) => _post('/contacts/email', data);
export {find, store, email};
