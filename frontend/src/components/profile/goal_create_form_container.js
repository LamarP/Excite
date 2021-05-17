import {createGoal} from '../../actions/goal_actions';
import GoalCreateForm from './goal_create_form';
import {connect} from 'react-redux';

const mSTP = (state, ownProps) => ({
    user: state.session.user,
    goals: state.goals, 
    toggleForm: ownProps.toggleForm , 
    fetch: ownProps.fetch
});

const mDTP = dispatch => ({
    processForm: data => dispatch(createGoal(data))
});

export default connect(mSTP, mDTP)(GoalCreateForm)