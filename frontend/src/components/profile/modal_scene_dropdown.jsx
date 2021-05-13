import React from 'react';

class ModalSceneDropdown extends React.Component {
    render() {
        const sceneLIst = this.props.scenes.map((scene, idx) => (
            <li key={idx} onClick={() => {
                this.props.select("selectedScene", scene.videoUrl);
                this.props.select("sceneImage", scene.imageUrl)
                }}>
                <img src={scene.imageUrl} alt="" width="50" height="40" />
            </li>
        ))
        return(
            <ul>
                {sceneLIst}
            </ul>
            
        )
    }
}

export default ModalSceneDropdown