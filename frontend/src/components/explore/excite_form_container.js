import { connect } from 'react-redux';
import { createExcite } from '../../actions/excite_actions';
import ExciteForm from './excite_form';

const mDTP = dispatch => {
  return {
    createExcite: (excite) => dispatch(createExcite(excite))
  }
}

export default connect(null, mDTP)(ExciteForm)