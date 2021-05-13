
import React from 'react';
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
        setTimeout(() => this.setState({excites: result}), 500 )
    };

  

    render() {
        if(!this.props.goal.title) return null;

        let exciteModal = this.state.openModal ? <div className='modal-background' onClick={this.modalToggle}><ModalContainer key={this.props.goal._id} goal={this.props.goal}/></div> : <div></div>;
        let modalBtn = 
            <div onClick={this.modalToggle} className='goal-excite-bubble'>
                <button onClick={this.modalToggle} className="goal-excite-add">+</button>
            </div>;

        const exciteLinks = this.props.goal.excites.map((exciteId, idx) => {
           return this.state.excites[idx] ? <GoalExcite key={idx} exciteId={this.state.excites[idx]._id} excite={this.state.excites[idx]} goal={this.props.goal} removeExcite={this.props.removeExcite}/> : null;
        });

        if(this.state.excites.length === 0 && this.props.goal.title) {
            return (
                <div className="goal-item-container">
                    <div className='goal-options'>
                        <div className="goal-title">{this.props.goal.title}{modalBtn}</div>
                        
                    </div>
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