
import React from 'react';
import ModalContainer from './modal_container';
import GoalExcite from './goal_excite';

class GoalIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { excites: [], openModal: false }
        this.reRender = this.reRender.bind(this)
        this.modalToggle = this.modalToggle.bind(this)
        this.fetchExcites = this.fetchExcites.bind(this);
    }

    modalToggle() {
         if(!this.state.openModal) {
            this.setState({openModal:true})
        } else {
            this.setState({openModal: false})
        }
    }

   reRender(action, exciteId) {
       let result = this.state.excites;
       if(action === 'add') {
           this.props.fetchExcite(exciteId)
               .then(res => {
                   result.push(res.excite)
                   this.setState({excites: result})
                   this.props.renderProfile()
               })
       } else if(action === 'remove') {
            this.props.removeExcite(exciteId)
                .then(res => {
                    this.setState({excites: res.goal.data.excites})
                    this.fetchExcites('state')
                    this.props.renderProfile()
                })
       }
    }

    componentDidMount() {
        this.fetchExcites('props')
    };

    fetchExcites(source) {
        const result = []
        if(source === 'props') {
            this.props.goal.excites.forEach( async (exciteId) => {
               const fetchedResults = await this.props.fetchExcite(exciteId)
               result.push(fetchedResults.excite);
            });
        } else if(source === 'state') {
            this.state.excites.forEach( async (exciteId) => {
               const fetchedResults = await this.props.fetchExcite(exciteId)
               result.push(fetchedResults.excite);
            });
        }
        setTimeout(() => this.setState({excites: result}), 500 )
    }

    render() {
        if(!this.props.goal.title) return null;
        const {goal, removeExcite} = this.props;
        const {excites, openModal} = this.state;
        let exciteModal = openModal ? <div className='modal-background' onClick={this.modalToggle}><ModalContainer key={goal._id} goal={goal} toggleForm={this.modalToggle} reRender={this.reRender} /></div> : <div></div>;
        let modalBtn = 
            <div onClick={this.modalToggle} className='goal-excite-bubble'>
                <button onClick={this.modalToggle} className="goal-excite-add">+</button>
            </div>;

        const exciteLinks = goal.excites.map((exciteId, idx) => {
           return excites[idx] ? <GoalExcite key={idx} exciteId={excites[idx]._id} excite={excites[idx]} goal={goal} reRender={this.reRender} removeExcite={removeExcite}/> : null;
        });

        if(excites.length === 0 && goal.title) {
            return (
                <div className="goal-item-container">
                    <div className='goal-options'>
                        <div className="goal-title">{goal.title}{modalBtn}</div>
                        
                    </div>
                    {/* {modalBtn} */}
                    {exciteModal}
                </div>
            )
        } else {
            return(
                <div className="goal-item-container">
                    <h3 className="goal-title">{goal.title} {modalBtn}</h3>
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