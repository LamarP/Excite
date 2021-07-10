import React, {useEffect} from 'react';
const Modal = props => {
    const {fetchExcites} = props;

    useEffect(() => {
        fetchExcites();
    }, [fetchExcites]);

    const handleSubmit = (exciteId) => {
        const goal = {
            goalId: props.goal._id,
            title: props.goal.title, 
            userId: props.user.id, 
            excites: exciteId
        };
        props.processForm(goal)
            .then(() => {
                props.toggleForm()
                props.reRender('add', exciteId)
                return false;
            });
    };

    if(!props.excites) return null;

    let excites = props.excites.filter(excite => (
        !props.goal.excites.includes(excite._id)
    ));

    let excitesList = excites.map((excite, idx) => (
        <li key={idx} onClick={() => handleSubmit(excite._id)} className="modal-excite-list-item">
            <img src={excite.sceneImage} alt="" width="90" height="60"/>
            <p className="modal-list-title">{excite.title}</p>
        </li>
    ));

    return(
        <div className='modal-child' onClick={e => e.stopPropagation()}>
                <div className='modal-excite-list-title'><h1>Excites</h1></div>
                <ul className="modal-excite-list-container">
                    {excitesList}
                </ul>
        </div>
    );
};

export default Modal;