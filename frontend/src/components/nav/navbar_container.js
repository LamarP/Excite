import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';


const mapStateToProps = (state, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    // ownProps: ownProps
});


export default connect(mapStateToProps,{ logout })(NavBar);