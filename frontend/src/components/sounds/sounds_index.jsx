import React from 'react';


export default class SoundsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false
        }
        // this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        this.props.fetchSound('lookback')
        
    }
    render() {
        if(!this.props.sound.config) {return null}
        return (
           <div>
               <audio src={this.props.sound.config.url} controls></audio>
           </div>
        )
    }
};