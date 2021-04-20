import React from 'react';
import { Link } from 'react-router-dom';


class ExploreItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();
    this.props.addExcite(this.props.excite)
  }


  render() {
    return (
      <div>
        {/* Link to preview */}
        <Link>
          <img src={this.props.excite.thumbnail} alt={this.props.excite.title}/>
        </Link>
        <button type="submit" onSubmit={this.onSubmit}>Add</button>
      </div>
    )
  }
}

export default ExploreItem;