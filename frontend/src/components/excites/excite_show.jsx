import React from 'react';

export default class ExciteShow extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchExcite(this.props.exciteId)
        
    }

    componentDidUpdate() {
        if(this.props.excite) {
            this.props.fetchScene(this.props.excite.scene)
        }
    }

    componentWillUnmount() {
        this.props.fetchScenes();
    }

    handleClick() {
        this.props.history.push('/excites');
    }

    render() {
        console.log(this.props)
        if(!this.props.excite === 'undefined'){ return null }

        if(!this.props.scene.data.video_files) {return null}
        const videoSrc = this.props.scene.data.video_files.filter(file => {
            return file.quality === 'hd'
        });
       
        return (
            <div>
                <video src={videoSrc[0].link} onClick={this.handleClick} autoPlay muted loop className='vid' type='video/mp4'></video>
            </div>
        )
    }
};