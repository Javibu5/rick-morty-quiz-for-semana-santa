import { connect } from "react-redux";
import { answerCuestion } from "../actions";
import Cuestion from "../components/Cuestion";

const mapStateToProps = state => ({
  currentCuestion: state.cuestions.length
    ? state.cuestions[state.cuestions.length - 1]
    : null
});

const mapDispatchToProps = dispatch => ({
  answerCuestion: () => dispatch(answerCuestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cuestion);
