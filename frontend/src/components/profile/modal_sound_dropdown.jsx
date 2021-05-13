import React from 'react';

class ModalSoundDropdown extends React.Component {
    render() {
        const soundList = this.props.sounds.map((sound, idx) => (
            <li key={idx} onClick={() => this.props.select("selectedSound", sound.slice(0, -4))}>
                <p>{sound.slice(0, -4)}</p>
            </li>
        ))
        return(
            <ul>
                {soundList}
            </ul>
        )
    }
}

export default ModalSoundDropdown