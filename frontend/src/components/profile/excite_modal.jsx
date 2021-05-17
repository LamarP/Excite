import React from 'react';
import ExciteModalContainer from './excite_modal_container';

class ExciteModal extends React.Component {

    render() {

        return (
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                <div className='modal-create-goal-title'><h1 className="modal-create-excite-title">Create an Excite</h1></div>

                <div className='modal-create-goal-container'>
                    <ExciteModalContainer />
                </div>
                    
               
            </div>

        );
    };
};

export default ExciteModal;
