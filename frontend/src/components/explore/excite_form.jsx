// import React from 'react';

// class ExciteForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: '',
//       sceneId: '',
//       sceneUrl: '',
//       sceneImage: '',
//       users: [],
//       sounds: []
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.createExcite(this.state)
//       .then(excite =>
//         this.props.history.push(`/excites/${excite.id}`));
//   }

//   update(property) {
//     return e => this.setState({ [property]: e.target.value });
//   }

//   render() {
//     return (
//       <div className="new-excite-container">
//         <div className="new-excite-form">
//           <h3 className="new-excite-title">Creat An Excite!</h3>
//           <form onSubmit={this.handleSubmit}>
//             <label className="excite-title">Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={this.update('title')}
//               className="excite-title"
//             />
//             <input
//               type="text"
//               value={sceneId}
//               onChange={this.update('')}
//               className="excite-title"
//             />
//           </form>
//         </div>

//       </div>
//     )
//   }
// }