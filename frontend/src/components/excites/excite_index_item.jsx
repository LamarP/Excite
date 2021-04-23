import React from 'react';
import { Link } from 'react-router-dom';


class ExciteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
    <li className="excite-index-item">
      <Link to={`/excite/${this.props.excite.id}`}>
        <span>{this.props.excite.id}</span>
        <span>{this.props.excite.title}</span>
      </Link>

      </li>
    )
  }
}

export default ExciteIndexItem;





// export default class ExciteIndexItem extends React.Component {

//   componentDidMount() {
//     this.props.fetchScene(this.props.excite.scene);
//  }
//   render() {
//     console.log(this.props);
//     return (
//       <li>
//         {/* <img src={this.props.thumbnail} width="360" height="240"/> */}
//       </li>
//     )
//   }
// }