
import React from 'react';
import {Link} from 'react-router-dom';
import ModalContainer from './modal_container';
import GoalExcite from './goal_excite';

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

        let exciteModal = this.state.openModal ? <ModalContainer goal={this.props.goal}/> : <div></div>;
        let modalBtn = <button onClick={this.modalToggle} className="goal-excite-add">+</button>;

        const exciteLinks = this.props.goal.excites.map((exciteId, idx) => {
            return this.state.excites[idx] ? <GoalExcite key={idx} exciteId={exciteId} excite={this.state.excites[idx]}/> : null;
        });

        if(this.state.excites.length === 0 && this.props.goal.title) {
            return (
                <div className="goal-item-container">
                    <h3 className="goal-title">{this.props.goal.title}</h3>
                    {modalBtn}
                    {exciteModal}
                </div>
            )
        } else {
            return(
                <div className="goal-item-container">
                    <h3 className="goal-title">{this.props.goal.title}</h3>
                    {exciteLinks}
                    {modalBtn}
                    {exciteModal}
                </div>
            )
        }
    }
}

export default GoalIndexItem;