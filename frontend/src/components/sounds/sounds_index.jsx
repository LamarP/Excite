import React from 'react';

export default class SoundsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSound('lookback');
    }
    render() {
        console.log(this.props)
        return (
            <div>soundsIndex</div>
        )
    }
};