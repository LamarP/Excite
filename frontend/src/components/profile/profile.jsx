
import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalIndexItem from './goal_index_item';
import GoalCreateFormContainer from './goal_create_form_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.formToggle = this.formToggle.bind(this)
        this.state = {showForm: false}
    }
    formToggle() {
        if(!this.state.showForm) {
            this.setState({showForm:true})
        } else {
            this.setState({showForm: false})
        }
    };
    componentDidMount() {
        this.props.fetchUserGoals(this.props.user.id)
    }
    render() {
        if(!this.props.goals.data) return null;
        const goals = this.props.goals.data.map((goal, idx) => (
            <GoalIndexItem key={idx} goal={goal} fetchExcite={this.props.fetchExcite} user={this.props.user}/>
        ));
        let createForm;
        if(this.state.showForm) {
            createForm = <GoalCreateFormContainer/>
        } else {
            createForm = <div></div>
        }
        return (
            <div>
                <div className="goal-create-container">
                    <button className="goal-create-button" onClick={this.formToggle}>+ Create Goal</button>
                    {createForm}
                </div>
                {goals}
            </div>
        );
    }
}

export default withRouter(Profile);