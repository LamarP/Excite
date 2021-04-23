import React from 'react';
import SoundsIndexItem from './sounds_index_item';

export default class SoundsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false
        }
    }


    componentDidMount() {
        this.props.fetchSounds()
        
    }
    render() {
      if (!this.props.sounds) { return null; }
      const soundItems = this.props.sounds.map((sound, idx) => (
        <SoundsIndexItem key={idx} soundId={idx} fetchSound={this.props.fetchSound} sound={sound}/>  
      ))
        return (
           <div className='flex-sounds'>
                <ul className='sound-index'>
                    {soundItems}
               </ul>
           </div>
        )
    }
};