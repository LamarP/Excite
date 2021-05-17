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
            <div className="excite-index-container">
                {/* <button className="excite-create-button">+Create Excite</button> */}
                <ul className='scene-index' >
                    {exciteIndex}
                </ul>
            </div>
        )
    }
}