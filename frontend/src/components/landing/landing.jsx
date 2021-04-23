import React from 'react';

class Landing extends React.Component {


  render() {
    return (
      <div>
        <Link to={'/login'} style={{ textDecoration: 'none' }}>
            <h1  className='landing-title' >Excite</h1>
        </Link>
        <video onClick={this.handleClick}
            src="https://player.vimeo.com/external/324296639.hd.mp4?s=be09dbee33427d61902b888b25a9c13ac32c8659&profile_id=175&oauth2_token_id=57447761"
            autoPlay muted loop className='session-vid' type='video/mp4'>
        </video>

      </div>

    )
  }

}