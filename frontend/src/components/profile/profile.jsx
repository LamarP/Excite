
import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalIndexItem from './goal_index_item';
import GoalCreateFormContainer from './goal_create_form_container';
import GoalTitleModal from './goal_title_modal';


class Profile extends React.Component {
    constructor(props) {
        super(props)
        // this.formToggle = this.formToggle.bind(this)
        this.state = {showForm: false}
        this.modalToggle = this.modalToggle.bind(this);
    }
    // formToggle() {
    //     if(!this.state.showForm) {
    //         this.setState({showForm:true})
    //     } else {
    //         this.setState({showForm: false})
    //     }
    // };
    modalToggle() {
        if (!this.state.openModal) {
            this.setState({ openModal: true })
        } else {
            this.setState({ openModal: false })
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
        this.state.showForm ? createForm = <GoalCreateFormContainer /> :  createForm = <div></div>;
        
        return (
            <div className='profile-page'>
                <div className="goal-create-container">
                    <button className="goal-create-button" onClick={this.modalToggle}>+ Create Goal</button>
                    {createForm}
                </div>
                {goals}
                {createModal}
                {/* {modalBtn} */}
            </div>
        );
    }
}

export default withRouter(Profile);