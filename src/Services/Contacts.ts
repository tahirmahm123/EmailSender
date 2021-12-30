import {_get, _post} from './Generic';
import {Contact} from '../types';
const find = () => _get<Contact>('/contacts');
const store = (data: Contact) => _post('/contacts', data);
export {find, store};
