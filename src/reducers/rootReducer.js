import { combineReducers } from 'redux';
import stuff from './stuffReducer';
import employee from './employeeReducer';

const rootReducer = combineReducers({
    stuff,
    employee
});

export default rootReducer;