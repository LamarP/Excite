
import React, { useState, useEffect, useCallback } from 'react';
import GoalIndexItem from './goal_index_item';
import GoalTitleModal from './goal_title_modal';
import ExciteModal from './excite_modal';

const Profile = props => {
    const [showGoalForm, setGoalForm] = useState(false);
    const [showExciteForm, setExciteForm] = useState(false);

    const {fetchUserGoals} = props;
    const id = props.user.id;

    const memoCallBack = useCallback(() => {
        const renderProfile = id => fetchUserGoals(id);
        renderProfile(id);

    }, [fetchUserGoals, id]);

    useEffect(() => {
        memoCallBack()
    }, [memoCallBack]);

    const createModal =   
        <div className='modal-background' onClick={() => showGoalForm ? setGoalForm(false) : setGoalForm(true) }>
              <GoalTitleModal toggleForm={() => showGoalForm ? setGoalForm(false) : setGoalForm(true)} fetch={props.fetchUserGoals}/>
        </div>;

    const exciteModal = 
        <div className='modal-background' onClick={() => showExciteForm ? setExciteForm(false) : setExciteForm(true) }>
              <ExciteModal />
        </div>;

    if(!props.goals.data) return null;

    const goals = props.goals.data.map((goal, idx) => (
            <GoalIndexItem key={idx} 
                goal={goal} 
                fetchExcite={props.fetchExcite} 
                user={props.user} 
                removeExcite={props.removeExcite}
                deleteGoal={props.deleteGoal}
                updateGoal={props.updateGoal}
                renderProfile={memoCallBack}
            />
        ));

    return (
        <div className='profile-page'>
            <div className="goal-create-container">
                <div className='create-div'>
                    <button className="goal-create-button" onClick={() => showGoalForm ? setGoalForm(false) : setGoalForm(true) }>+Create Goal</button>
                    <button className="excite-create-button" onClick={() => showExciteForm ? setExciteForm(false) : setExciteForm(true)}>+Create Excite</button>
                </div>
                {showGoalForm && createModal}
                {showExciteForm && exciteModal}
                
            </div>
                <div className='goal-grid-parent'>
                    {goals}
                </div>
            {/* {createModal} */}
        </div>
    );
    
};

export default Profile;
// class Profile extends React.Component {
//     constructor(props) {
//         super(props)
//         this.goalFormToggle = this.goalFormToggle.bind(this);
//         this.exciteFormToggle = this.exciteFormToggle.bind(this);
//         this.renderProfile = this.renderProfile.bind(this);
//         this.state = { showGoalForm: false, showExciteForm: false, openModal: false}
//     }
    
//     goalFormToggle() {
//         if(!this.state.showGoalForm) {
//             this.setState({showGoalForm:true, showExciteForm: false})
//         } else {
//             this.setState({showGoalForm: false})
//         }
//     };
//     exciteFormToggle() {
//         if(!this.state.showExciteForm) {
//             this.setState({showExciteForm:true, showGoalForm: false})
//         } else {
//             this.setState({showExciteForm: false})
//         }
//     }

//     componentDidMount() {
//         this.renderProfile()
//     }

//     renderProfile() {
//         this.props.fetchUserGoals(this.props.user.id)
//     }
    
//     render() {
//         let createModal = this.state.showGoalForm ? 
//         <div className='modal-background' onClick={this.goalFormToggle}>
//               <GoalTitleModal toggleForm={this.goalFormToggle} fetch={this.props.fetchUserGoals}/>
//         </div> : <div></div>;

//         let exciteModal = this.state.showExciteForm ? 
//         <div className='modal-background' onClick={this.exciteFormToggle}>
//               <ExciteModal />
//         </div>
//             : 
//         <div></div>;

//         if(!this.props.goals.data) return null;
//         const goals = this.props.goals.data.map((goal, idx) => (
//             <GoalIndexItem key={idx} 
//                 goal={goal} 
//                 fetchExcite={this.props.fetchExcite} 
//                 user={this.props.user} 
//                 removeExcite={this.props.removeExcite}
//                 deleteGoal={this.props.deleteGoal}
//                 updateGoal={this.props.updateGoal}
//                 renderProfile={this.renderProfile}
//             />
//         ));
//         return (
//             <div className='profile-page'>
//                 <div className="goal-create-container">
//                     <div className='create-div'>
//                         <button className="goal-create-button" onClick={this.goalFormToggle}>+Create Goal</button>
//                         <button className="excite-create-button" onClick={this.exciteFormToggle}>+Create Excite</button>
//                     </div>

//                     {createModal}
//                     {exciteModal}
                    
//                 </div>

//                     <div className='goal-grid-parent'>
//                         {goals}
//                     </div>
                
//                 {/* {createModal} */}
                
//             </div>
//         );
//     }
// }

// export default withRouter(Profile);