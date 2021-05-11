import {createGoal} from '../../actions/goal_actions';
import GoalCreateForm from './goal_create_form';
import {connect} from 'react-redux';

const mSTP = state => ({
    user: state.session.user
});

const mDTP = dispatch => ({
    processForm: data => dispatch(createGoal(data))
});

export default connect(mSTP, mDTP)(GoalCreateForm)