import React from 'react';
import ExciteModalContainer from './excite_modal_container';

class ExciteModal extends React.Component {

    render() {

        return (
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                
                    <ExciteModalContainer />
               
            </div>

        );
    };
};

export default ExciteModal;
