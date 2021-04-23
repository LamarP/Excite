import React from 'react';

class ExciteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchExcite(this.props.match.params.exciteId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.exciteId !== this.props.match.params.exciteId) {
      this.props.fetchExcite(this.props.match.params.exciteId);
    }
  }

  render() {
    console.log(this.props);
    if (!this.props.excite) return null;
    return (
      <section className="excite-detail">
        <figure>
        {/* <img src={this.props.scene.image} width='360' height='240' alt=""/> */}
        </figure>
      </section>
    )
  }
}

export default ExciteIndex;