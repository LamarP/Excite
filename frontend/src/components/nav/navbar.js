import React from 'react';
import { Link } from 'react-router-dom';
import song from '../../One Ok Rock Onion English Sub.mp3';
import ReactAudioPlayer from 'react-audio-player';


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

    componentDidMount() {
        return (<audio type="audio/mpeg" autoPlay volume="0.1" controls id='my-audio'
        >
            <source src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' type="audio/ogg" />
        </audio>)
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
               <div>
                <div className='nav-area'>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>

                        <h1>Excite</h1>
                    </Link>
                    <Link to={'/'}>Profile</Link>
                    <Link to={'/explore'}>Explore</Link>
                    <Link to={'/excites'}>Excites</Link>
                    <Link to={'/scenes'}>Scenes</Link>   

                    
                </div>
              
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
                            <li><Link className='link' to={'/excites'}>Excites</Link></li>
                    
                    </ul>
                       
                 </div>
                    
                      <video 
                        src="https://player.vimeo.com/external/370845105.hd.mp4?s=1facf7310d1f043ea079556373d0618003593f2d&profile_id=173&oauth2_token_id=57447761"
                        autoPlay muted loop className='session-vid' type='video/mp4'>
                    </video>

                </div>
            );
                

                
              } else {
                return (
                  <div className="navbar-parent">
                  <Link to={'/'} style={{ textDecoration: 'none' }}>
                  <h1  className='header-title' >Excite</h1>
                    </Link>
                    
                    
                    <div>
                    <video onClick={this.handleClick}
                        src="https://player.vimeo.com/external/324296639.hd.mp4?s=be09dbee33427d61902b888b25a9c13ac32c8659&profile_id=175&oauth2_token_id=57447761"
                        autoPlay muted loop className='session-vid' type='video/mp4'>
                    </video>

                     <audio autoPlay>
                        <source src={song} type="audio/mp3"/>
                    </audio> 
                         <ReactAudioPlayer 
                        autoPlay 
                        src={song} 
                        type="audio/mp3"
                        volume={0.1}
                        /> 
                  </div>
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
    
    export default NavBar;