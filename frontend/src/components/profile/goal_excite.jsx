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
    }

    showTrash() {
        if(!this.state.showDelete) this.setState({showDelete: true})
    }
    hideTrash() {
        if(this.state.showDelete) this.setState({showDelete: false})
    }
    render() {
       if(this.state.showDelete) {
            return(
                <div className="scene-index-item" onMouseEnter={this.showTrash} onMouseLeave={this.hideTrash}>
                    <Link to={`/explore/${this.props.exciteId}`}><img src={this.props.excite.sceneImage} alt="" width="153.12" height="115.2"/></Link>
                </div>
            )
       } else {
           return(
               <div className="scene-index-item" onMouseEnter={this.showTrash} onMouseLeave={this.hideTrash}>
                   <Link to={`/explore/${this.props.exciteId}`}><img className="goal-excite-img"src={this.props.excite.sceneImage} alt="" width="153.12" height="115.2"/></Link>
               </div>
           )
       }
    }
}

export default GoalExcite;