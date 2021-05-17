import React from 'react';
import ModalSceneDropdown from './modal_scene_dropdown';
import ModalSoundDropdown from './modal_sound_dropdown';
import {withRouter} from 'react-router-dom';
class ExciteModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {sceneDropShow: false, soundDropShow: false, selectedSound: "", selectedScene: "", sceneImage: "", title: ""}
        this.toggleSceneDropShow = this.toggleSceneDropShow.bind(this);
        this.toggleSoundDropShow = this.toggleSoundDropShow.bind(this);
        this.select = this.select.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    toggleSceneDropShow() {
        !this.state.sceneDropShow ? this.setState({sceneDropShow: true, soundDropShow: false}) : this.setState({sceneDropShow: false})
    }
    toggleSoundDropShow() {
        !this.state.soundDropShow ? this.setState({soundDropShow: true, sceneDropShow: false}) : this.setState({soundDropShow: false})
    }
    select(key, value) {
       Promise.resolve(this.setState({[key]: value})).then(this.setState({sceneDropShow: false, soundDropShow: false}))
    }
  
    update(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.selectedSound.length > 0 && this.state.selectedScene.length > 0) {
            const excite = {
                title: this.state.title, 
                sceneUrl: this.state.selectedScene, 
                sceneImage: this.state.sceneImage,
                users: this.props.user.id, 
                sounds: this.state.selectedSound + '.mp3'
            };
            this.props.processForm(excite).then((res) => {
                this.props.history.push('/explore')
                return false;
            })
        }
    }

    
    componentDidMount() {
        this.props.fetchSceneModels();
        this.props.fetchSounds();
    }

    componentWillUnmount() {
        this.setState({sceneDropShow: false, soundDropShow: false, selectedSound: "", selectedScene: ""})
    }
    render(){
       if(!this.props.scenes || !this.props.sounds) return null;
       let sceneDropDown = this.state.sceneDropShow ? <ModalSceneDropdown scenes={this.props.scenes} select={this.select} /> : <div></div>;
       let soundDropDown = this.state.soundDropShow ? <ModalSoundDropdown sounds={this.props.sounds} select={this.select}/> : <div></div>;
        return(
            <div className="modal-child">
               <div className="drop-container">
                    <button onClick={this.toggleSceneDropShow}>Select A Scene ⬇</button>
                    <button onClick={this.toggleSoundDropShow}>Select A Sound ⬇</button>
                    {sceneDropDown}
                    {soundDropDown}
                    <form className="goal-create-form" onSubmit={this.handleSubmit}>
                            <input id="title" type="text" placeholder="Title" onChange={this.update("title")} maxLength="10"/>
                        <button type="submit">Submit</button>
                    </form>
               </div>
            </div>
        )
    }
}

export default withRouter(ExciteModal);