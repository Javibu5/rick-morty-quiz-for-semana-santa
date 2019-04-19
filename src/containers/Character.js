import { connect } from "react-redux";
import { fetchCharacter } from "../actions";
import Character from "../components/Character";

const mapStateToProps = state => ({
  character: state.character
});

const mapDispatchToProps = dispatch => ({
  fetchCharacter: () => dispatch(fetchCharacter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);
