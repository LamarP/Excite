import React from 'react';
import ExciteIndexItem from './excite_index_item';
export default class ExciteIndex extends React.Component {
    componentDidMount() {
        this.props.fetchScenes();
        this.props.fetchSounds();
    }

    render() {
        if(!this.props.scenes.data) return null;
        const exciteIndex = this.props.scenes.data.map((scene, idx) => {
            return <ExciteIndexItem key={idx} idx={idx} scene={scene} fetchExcite={this.props.fetchExcite} fetchScene={this.props.fetchScene}/>
        })
        return(
            <div>
                <ul>
                    {exciteIndex}
                </ul>
            </div>
        )
    }
}