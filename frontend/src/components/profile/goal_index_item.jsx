
import React from 'react';
import {Link} from 'react-router-dom';
import ModalContainer from './modal_container';

class GoalIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { excites: [], openModal: false }
        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle() {
         if(!this.state.openModal) {
            this.setState({openModal:true})
        } else {
            this.setState({openModal: false})
        }
    }

    componentDidMount() {
        const result = []
        this.props.goal.excites.forEach( async (excite) => {
           const fetchedResults = await this.props.fetchExcite(excite)
           result.push(fetchedResults.excite);
        });
        setTimeout(() => this.setState({excites: result}), 200 )
    };

  

    render() {
        if(!this.props.goal.title) return null;

        let exciteModal = this.state.openModal ? <div className='modal-background' onClick={this.modalToggle}><ModalContainer goal={this.props.goal}/></div> : <div></div>;
        let modalBtn = <button onClick={this.modalToggle} className="goal-excite-add">+</button>;

        const exciteLinks = this.props.goal.excites.map((exciteId, idx) => {
            return this.state.excites[idx] ? 
            
            <div className='scene-index-item'>
                <Link key={idx} to={`/explore/${this.state.excites[idx]._id}`}><img src={this.state.excites[idx].sceneImage} alt="" width="319" height="240"/>
                    <div className='excite-index-item-title' >{this.state.excites[idx].title}</div>

                
                </Link> 
            </div>
            : null;
           
        });

        if(this.state.excites.length === 0 && this.props.goal.title) {
            return (
                <div className="goal-item-container">
                    <h3 className="goal-title">{this.props.goal.title} {modalBtn}</h3>
                    {/* {modalBtn} */}
                    {exciteModal}
                </div>
            )
        } else {
            return(
                <div className="goal-item-container">
                    <h3 className="goal-title">{this.props.goal.title} {modalBtn}</h3>
                    <div className="goal-img-container">
                        {exciteLinks}
                    </div>
                    {/* {modalBtn} */}
                    {exciteModal}
                </div>
            )
        }
    }
}

export default GoalIndexItem;