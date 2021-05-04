import React from 'react';
import { withRouter } from 'react-router-dom';
import ExciteIndexItem from './excite_index_item';
// import ExciteDetailContainer from './excite_detail_container';
class ExciteIndex extends React.Component {


  componentDidMount() {
    this.props.fetchExcites();
   
  }

  componentWillReceiveProps(newState) {
    this.setState({ excites: newState.excites });
  }
  render() {
    // let { excites } = this.props;
    console.log(this.props);
    if (!this.props.excites) {
      return null
    }
      return (
        <div>
          
          {this.props.excites.map((excite, id) => (
            <ExciteIndexItem key={id} exciteId={id} excite={excite} />
          ))}
        
        </div>
      );
    }
  
}
//    import React from 'react';
// import { withRouter } from 'react-router-dom';
// import ExploreItem from './explore_item';

// class Explore extends React.Component {
  
   
//   componentWillMount() {
//     this.props.fetchAllExcites()
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <p>Excites</p>
//         {
//           this.props.excites.map( (excite, id) => (
//             < ExciteIndexItem excite={excite} key={id} title={excite.title} />
//           ))
//         }
//       </div>
//     )
//   }
// }

// export default withRouter(Explore);

 

 export default withRouter(ExciteIndex);

