import { connect } from 'react-redux';
import {fetchUserGoals, removeExcite} from '../../actions/goal_actions';
import {fetchExcite, fetchExcites} from '../../actions/excite_actions';
import Profile from './profile';

const mapStateToProps = (state, props) => {
     return {
         user: state.session.user, 
         goals: state.goals, 
         excites: Object.values(state.excites)
     }
}; 

const mapDispatchToProps = (dispatch, props) => {
    return {
       fetchUserGoals: userId => dispatch(fetchUserGoals(userId)), 
       removeExcite: goal => dispatch(removeExcite(goal)),
       fetchExcite: exciteId => dispatch(fetchExcite(exciteId)), 
       fetchExcites: excites => dispatch(fetchExcites(excites))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);