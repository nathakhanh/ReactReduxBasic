import initialState from './initialState';
import { RECEIVE_EMPLOYEE } from '../actions/actionTypes';

export default function employee(state = initialState.employee, action) {
    let newState;
    switch (action.type) {
        case RECEIVE_EMPLOYEE:
            console.log('RECEIVE_STUFF Action')
            newState = action.employee;
            return newState;
        default:
            return state;
    }
}