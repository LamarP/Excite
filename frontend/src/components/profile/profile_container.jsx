import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state, props) => {
     return {
         user: state.session.user
     }
}; 

const mapDispatchToProps = (dispatch, props) => {
    return {
        //action: () => null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);