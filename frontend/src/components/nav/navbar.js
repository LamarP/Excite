import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <div className='header'>
                        <Link className='link' to={'/profile'} style={{ textDecoration: 'none' }}>
                                <h1 className='logo'>Excite</h1>
                        </Link>

                        <button className="logout" onClick={this.logoutUser}>Logout</button>
                    <ul className='nav-area'>
                            <li><Link className='link' to={'/profile'}>Profile</Link></li>
                            <li><Link className='link' to={'/explore'}>Explore</Link></li>
                            <li><Link className='link' to={'/scenes'}>Scenes</Link></li>
                            <li><Link className='link' to={'/sounds'}>Sounds</Link></li>
                            <li><Link className='link' to={'/about'}>About</Link></li>
                    </ul>   
                 </div>
                      <video 
                        src="https://player.vimeo.com/external/370845105.hd.mp4?s=1facf7310d1f043ea079556373d0618003593f2d&profile_id=173&oauth2_token_id=57447761"
                        autoPlay muted loop className='session-vid' type='video/mp4'>
                    </video>
                </div>   
            );
        } else {

            let vid;

            if(this.props.history.location.pathname === '/') {
                vid =   <div></div>;
            } else {
                vid =   <video onClick={this.handleClick}
                            src="https://player.vimeo.com/external/324296639.hd.mp4?s=be09dbee33427d61902b888b25a9c13ac32c8659&profile_id=175&oauth2_token_id=57447761"
                            autoPlay muted loop className='session-vid' type='video/mp4'>
                        </video>;
            }
            return (

                <div>
                    {vid}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                { this.getLinks() }
            </div>
        );
    }
}

export default withRouter(NavBar);