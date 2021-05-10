
import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalIndexItem from './goal_index_item';

class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchUserGoals(this.props.user.id)
    }
    render() {
        if(!this.props.goals.data) return null;
        const goals = this.props.goals.data.map((goal, idx) => (
            <GoalIndexItem key={idx} goal={goal} fetchExcite={this.props.fetchExcite}/>
        ));
        return (
            <div>
                {goals}
            </div>
        );
    }
}

export default withRouter(Profile);