import React from 'react';

class ExciteDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchExcite(this.props.match.params.exciteId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.exciteId !== this.props.match.params.exciteId) {
      this.props.fetchExcite(this.props.match.params.exciteId);
    }
  }

  handleClick() {
    //this.props.history.goBack();
    this.props.history.push('/excite');
  }

  render() {
    if (!this.props.excite) return null;
    return (
      <div className="excite-detail">
        <div>
          <video onClick={this.handleClick}
            src={this.props.excites.scenes.video_files.filter(vid => (vid.quality === "hd"))[0].link}
            autoPlay muted loop className='vid' type='video/mp4'>
          </video>
        </div>
      </div>
    )
  }

}

export default ExciteDetail;

