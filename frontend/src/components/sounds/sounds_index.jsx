import React from 'react';
import SoundIndexItem from './sounds_index_item';

export default class SoundsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false
        }
        // this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        this.props.fetchSounds()
        
    }
    render() {
      if (!this.props.sounds) { return null; }
      const soundItems = this.props.sounds.map((sound, idx) => {
        return <SoundIndexItem key={idx} soundId={idx} fetchSound={this.props.fetchSound} sound={sound}/>  
      })
        return (
           <div>
            <ul>
              {soundItems}
               </ul>
           </div>
        )
    }
};