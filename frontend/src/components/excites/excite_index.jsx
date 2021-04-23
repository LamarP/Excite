import React from 'react';
import ExciteIndexItem from './excite_index_item';

import { Route } from 'react-router-dom';
import ExciteDetailContainer from './excite_detail_container';

class ExciteIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchExcites();
  }

  render() {
     const { excites } = this.props;
    const excite_arr = Object.values(excites);
    if (!excites) { return null }
    
    return (
      <div>
        <section>
          <Route path="/excites/:exciteId" component={ExciteDetailContainer} />
          <ul>
            {
              excite_arr.map((excite,idx) => (
                <ExciteIndexItem
                  key={idx}
                excite={excite}/>
              ))
            }
          </ul>
        </section>
      </div>
    )
  }
}

export default ExciteIndex;


// export default class ExciteIndex extends React.Component {
  
//   componentDidMount() {
//     this.props.fetchExcites();
    
//   }

//   render() {
//     console.log(this.props);
//     if (!this.props.exciteArr) { return null }
    
//     const thumbnails = this.props.exciteArr.map((excite, idx) => {
//       return <ExciteIndexItem key={idx} excite={excite} fetchScene={this.props.fetchScene}/>
//     })
//     return (
//       <div>words
//         <ul>
//           {thumbnails}
//         </ul>
//       </div>
//     )
//   }
 
//}

