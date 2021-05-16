
import React from 'react';
import ModalContainer from './modal_container';
import GoalExcite from './goal_excite';

class GoalIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { excites: [], openModal: false, showEditDelete: false, showDeleteForm: false}
        this.reRender = this.reRender.bind(this)
        this.modalToggle = this.modalToggle.bind(this)
        this.fetchExcites = this.fetchExcites.bind(this);

    }

    modalToggle() {
        !this.state.openModal ? this.setState({openModal: true}) : this.setState({openModal: false})
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

    handleHover(action) {
        action === 'enter' ? this.setState({showEditDelete: true}) : this.setState({showEditDelete: false})
    }

    handleClick(action) {
        if(action === 'del') {
           this.setState({showDeleteForm: true})
        } else if(action === 'close') {
            this.setState({showDeleteForm: false})
        } else if(action === 'delete') {
            this.props.deleteGoal(this.props.goal._id)
                .then(() => this.setState({showDeleteForm: false}))
                .then(() => this.props.renderProfile())
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
        const {excites, openModal, showEditDelete, showDeleteForm} = this.state;

     

        // toggle edit delete buttons
        let editDelete = 
            showEditDelete ? <div className="edit-delete-goal">
                <i className="fas fa-edit" id="edit" onClick={() => this.handleClick('edit')}></i>
                <i className="fas fa-trash" id="del" onClick={() => this.handleClick('del')}></i>
            </div> : null;

        //toggle excite to goal modal button
        let modalBtn = 
            <div onClick={this.modalToggle} className='goal-excite-bubble'>
                <button 
                onClick={this.modalToggle} className="goal-excite-add">+</button>
            </div>;

           //add excite to goal modal
        let exciteModal = openModal ? <div className='modal-background' onClick={this.modalToggle}>
            <ModalContainer key={goal._id} goal={goal} toggleForm={this.modalToggle} reRender={this.reRender} />
            </div> : null;

        // delete goal form 
        let showDelForm = 
            showDeleteForm ? <div onClick={() => this.handleClick('close')} className='modal-background'>
                <div className="modal-child" id="goal-delete-modal" onClick={e => e.stopPropagation()}>
                    <h3 className="delete-form-prompt">Are you sure you want to delete this goal?</h3>
                    <button className="delete-form-btn" onClick={() => this.handleClick('delete')}>Yes</button>
                    <button className="delete-form-btn" onClick={() => this.handleClick('close')}>No</button>
                </div>
            </div> : null;

        // excite images/links
        const exciteLinks = goal.excites.map((exciteId, idx) => {
           return excites[idx] ? <GoalExcite key={idx} exciteId={excites[idx]._id} excite={excites[idx]} goal={goal} reRender={this.reRender} removeExcite={removeExcite}/> : null;
        });

        if(excites.length === 0 && goal.title) {
            return (
                <div className="goal-item-container">
                    <div className='goal-options'>
                        <div className="goal-title" onMouseEnter={() => this.handleHover('enter')} onMouseLeave={() => this.handleHover('leave')}>
                            {editDelete}
                            {goal.title}
                            {modalBtn}
                        </div>
                    </div>
                    {exciteModal}
                    {showDelForm}
                </div>
            )
        } else {
            return(
                <div className="goal-item-container">
                    <h3 className="goal-title" onMouseEnter={() => this.handleHover('enter')} onMouseLeave={() => this.handleHover('leave')}>{editDelete} {goal.title} {modalBtn}</h3>
                    <div className="goal-img-container">
                        {exciteLinks}
                    </div>
                    {exciteModal}
                     {showDelForm}
                </div>
            )
        }
    }
}

export default GoalIndexItem;