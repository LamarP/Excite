import React from 'react';

class Modal extends React.Component {

    handleSubmit(exciteId) {
        const goal = {
            goalId: this.props.goal._id,
            title: this.props.goal.title, 
            userId: this.props.user.id, 
            excites: exciteId
        };
        this.props.processForm(goal);
    };

    componentDidMount() {
        this.props.fetchExcites()
    };

    render() {
        if(!this.props.excites) return null;
        const excitesList = this.props.excites.map((excite, idx) => (
            <li key={idx} onClick={() => this.handleSubmit(excite._id)} className="modal-excite-list-item">
                <img src={excite.sceneImage} alt="" width="30" height="25"/>
                <p className="modal-list-title">{excite.title}</p>
            </li>
        ))
        return(
           <div>
               <ul className="modal-excite-list-container">
                   {excitesList}
               </ul>
           </div>
        );
    };
};

export default Modal;