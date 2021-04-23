import { connect } from 'react-redux';
import { fetchExcite } from '../../actions/excite_actions';
import ExciteDetail from './excite_detail';

const mapStateToProps = (state, ownProps) => {
  return {
    excite: state.excites[ownProps.match.params.exciteId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExcite: (exciteId) => dispatch(fetchExcite(exciteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExciteDetail);