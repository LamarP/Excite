
import React from 'react';
import { withRouter } from 'react-router-dom';


class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>Welcome</h1>
            </div>
        );
    }
}

export default withRouter(Profile);