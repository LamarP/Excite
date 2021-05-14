import React from 'react';

class Modal extends React.Component {

    handleSubmit(exciteId) {
        const goal = {
            goalId: this.props.goal._id,
            title: this.props.goal.title, 
            userId: this.props.user.id, 
            excites: exciteId
        };
        this.props.processForm(goal)
            .then(() => {
                this.props.toggleForm()
                this.props.reRender('add', exciteId)
                return false;
            })
    };

    componentDidMount() {
        this.props.fetchExcites()
    };

    render() {
        if(!this.props.excites) return null;
        let excites = this.props.excites.filter(excite => (
            !this.props.goal.excites.includes(excite._id)
        ))
        let excitesList = excites.map((excite, idx) => (
            <li key={idx} onClick={() => this.handleSubmit(excite._id)} className="modal-excite-list-item">
                <img src={excite.sceneImage} alt="" width="90" height="60"/>
                <p className="modal-list-title">{excite.title}</p>
            </li>
        ))
        return(
           
                <div className='modal-child' onClick={e => e.stopPropagation()}>
                        <div className='modal-excite-list-title'><h1>Excites</h1></div>
                        <ul className="modal-excite-list-container">
                            {excitesList}
                        </ul>
                </div>
       
        );
    };
};

export default Modal;