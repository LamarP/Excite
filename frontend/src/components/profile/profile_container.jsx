import { connect } from 'react-redux';
import {fetchUserGoals} from '../../actions/goal_actions';
import {fetchExcite} from '../../actions/excite_actions';
import Profile from './profile';

const mapStateToProps = (state, props) => {
     return {
         user: state.session.user, 
         goals: state.goals
     }
}; 

const mapDispatchToProps = (dispatch, props) => {
    return {
       fetchUserGoals: userId => dispatch(fetchUserGoals(userId)), 
       fetchExcite: exciteId => dispatch(fetchExcite(exciteId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);