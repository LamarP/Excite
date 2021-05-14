import React from 'react';
import {Link} from 'react-router-dom';
class GoalExcite extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            showDelete: false
        };
        this.showTrash = this.showTrash.bind(this);
        this.hideTrash = this.hideTrash.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    showTrash() {
        if(!this.state.showDelete) this.setState({showDelete: true})
    }
    hideTrash() {
        if(this.state.showDelete) this.setState({showDelete: false})
    }
    handleClick(e) {
        e.preventDefault();
        const {goal, exciteId} = this.props;
        const newGoal = {
            title: goal.title, 
            userId: goal.userId, 
            goalId: goal._id,
            excites: exciteId
        }
        this.props.reRender('remove', newGoal)
        // this.props.removeExcite(newGoal)
        //     .then((res) => {
        //         this.props.reRender('remove');
        //         return false;
        //     })
    
    }
    
    render() {
       if(this.state.showDelete) {
            return(
                <div className="scene-index-item" onMouseEnter={this.showTrash} onMouseLeave={this.hideTrash}>
                    <Link to={`/explore/${this.props.exciteId}`}><img src={this.props.excite.sceneImage} alt="" width="153.12" height="115.2"/></Link>
                    <i className="fas fa-trash" onClick={this.handleClick}></i>
                </div>
            )
       } else {
           return(
               <div className="scene-index-item" onMouseEnter={this.showTrash} onMouseLeave={this.hideTrash}>
                   <Link to={`/explore/${this.props.exciteId}`}><img src={this.props.excite.sceneImage} alt="" width="153.12" height="115.2"/></Link>
               </div>
           )
       }
    }
}

export default GoalExcite;