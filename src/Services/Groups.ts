import {_get, _post} from './Generic';
import {Group, SendEmailToGroup} from '../types';
const find = () => _get<Group>('/groups');
const store = (data: Group) => _post('/groups', data);
const email = (data: SendEmailToGroup) => _post('/groups/email', data);
export {find, store, email};
