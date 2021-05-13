import React from 'react';
import GoalCreateFormContainer from './goal_create_form_container';

class GoalTitleModal extends React.Component {

    render() {

        return (
            <div className='modal-create-child' onClick={e => e.stopPropagation()}>
                <div className='modal-create-goal-title'><h1>Create Goal</h1></div>
                <ul className="modal-create-goal-container">
                    <GoalCreateFormContainer />
                </ul>
            </div>

        );
    };
};

export default GoalTitleModal;
