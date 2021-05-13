
import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalIndexItem from './goal_index_item';
import GoalCreateFormContainer from './goal_create_form_container';
import GoalTitleModal from './goal_title_modal';
import ExciteModalContainer from './excite_modal_container';


class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.goalFormToggle = this.goalFormToggle.bind(this);
        this.exciteFormToggle = this.exciteFormToggle.bind(this);
        this.state = {showGoalForm: false, showExciteForm: false}
    }
    goalFormToggle() {
        if(!this.state.showGoalForm) {
            this.setState({showGoalForm:true, showExciteForm: false})
        } else {
            this.setState({showGoalForm: false})
        }
    };
    exciteFormToggle() {
        if(!this.state.showExciteForm) {
            this.setState({showExciteForm:true, showGoalForm: false})
        } else {
            this.setState({showExciteForm: false})
        }

    }

    componentDidMount() {
        this.props.fetchUserGoals(this.props.user.id)
    }
    render() {
        let createModal = this.state.openModal ? <div className='modal-background' onClick={this.modalToggle}>
            <GoalTitleModal/></div> 
            : <div></div>;
        let modalBtn =
            <div onClick={this.modalToggle} className='goal-excite-bubble'>
                <button onClick={this.modalToggle} className="goal-excite-add">+</button>
            </div>;
        if(!this.props.goals.data) return null;
        const goals = this.props.goals.data.map((goal, idx) => (
            <GoalIndexItem key={idx} goal={goal} fetchExcite={this.props.fetchExcite} user={this.props.user} removeExcite={this.props.removeExcite}/>
        ));
        let createForm;
        let exciteForm;
        this.state.showGoalForm ? createForm = <GoalCreateFormContainer /> :  createForm = <div></div>;
        this.state.showExciteForm ? exciteForm = <ExciteModalContainer /> : exciteForm = <div></div>;
        return (
            <div className='profile-page'>
                <div className="goal-create-container">

                    <button className="goal-create-button" onClick={this.goalFormToggle}>+ Create Goal</button>
                    <button className="goal-create-button" onClick={this.exciteFormToggle}>+ Create Excite</button>

                    {createForm}
                    {exciteForm}
                </div>
                {goals}
                {createModal}
                {/* {modalBtn} */}
            </div>
        );
    }
}

export default withRouter(Profile);