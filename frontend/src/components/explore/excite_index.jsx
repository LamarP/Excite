import React from 'react';
import ExciteIndexItem from './excite_index_item';
export default class ExciteIndex extends React.Component {
    componentDidMount() {
        this.props.fetchExcites();
    }

    render() {
        if(!this.props.excites) return null;
        const exciteIndex = this.props.excites.map((excite, idx) => (
            <ExciteIndexItem key={idx} idx={idx} excite={excite}/>
        ));
        return(
                <ul className='scene-index' >
                    {exciteIndex}
                </ul>
        )
    }
}