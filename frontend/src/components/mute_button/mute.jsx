import React from 'react';

class Mute extends React.Component {
  constructor(props) {
    super(props)
    this.muteClick = this.muteClick.bind(this)
  }

  muteClick() {
    let audio = document.querySelector('#myAudio');
    if (audio.muted === false) {
      audio.muted = true;
    } else {
      audio.muted = false;
    }
  }

  render() {
    return (
      <div className='pink-circle'>
        <div className="mute-button" >
          <input type="checkbox" name="un-mute" id="un-mute" onClick={this.muteClick}/>
          <label htmlFor="un-mute" className="unmute">
              <img src="http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg" alt="Mute_Icon.svg" title="Mute icon"/>
          </label>
          <label htmlFor="un-mute" className="mute">
              <img src='http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg' alt="Speaker_Icon.svg" title="Unmute/speaker icon"/>
          </label>
        </div>
      </div>
    )
  }

}

export default Mute;