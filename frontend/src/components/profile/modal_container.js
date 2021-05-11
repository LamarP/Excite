import { connect } from 'react-redux';
import {updateGoal} from '../../actions/goal_actions';
import {fetchExcites} from '../../actions/excite_actions'
import Modal from './modal';

const mapStateToProps = (state, ownProps) => {
     return {
         user: state.session.user, 
         goals: state.goals, 
         goal: ownProps.goal,
         excites: Object.values(state.excites)
     }
}; 

const mapDispatchToProps = (dispatch, props) => {
    return {
       processForm: goal => dispatch(updateGoal(goal)), 
       fetchExcites: excites => dispatch(fetchExcites(excites))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);