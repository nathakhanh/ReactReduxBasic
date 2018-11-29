import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stuffActions from '../actions/stuffActions';
import Stuff from '../component/Stuff';

function mapStateToProps(state) {
    return {
        stuff: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stuff);