import {_get} from './Generic';
import {Template} from '../types';
const find = () => _get<Template>('/email-templates');
export {find};
