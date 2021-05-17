import { connect } from 'react-redux';
import {fetchUserGoals, removeExcite, deleteGoal, updateGoal} from '../../actions/goal_actions';
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
       deleteGoal: id => dispatch(deleteGoal(id)),
       removeExcite: goal => dispatch(removeExcite(goal)),
       fetchExcite: exciteId => dispatch(fetchExcite(exciteId)), 
       fetchExcites: excites => dispatch(fetchExcites(excites)), 
       updateGoal: goal => dispatch(updateGoal(goal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);