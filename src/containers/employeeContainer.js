import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as employeeActions from '../actions/employeeActions';
import Employee from '../component/Employee';

function mapStateToProps(state) {
    return {
        employee: state.employee
    };
}

function mapDispatchToProps(dispatch) {
    return {
        employeeActions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employee)
