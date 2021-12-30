import {_get, _post} from './Generic';
import {Group} from '../types';
const find = () => _get<Group>('/groups');
const store = (data: Group) => _post('/groups', data);
export {find, store};
