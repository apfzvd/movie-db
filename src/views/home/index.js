import { connect } from 'react-redux'
import Home from './home-component'
import * as actions from './home-store'

const mapStateToProps = ({ movies }) => ({
  topRated: movies.topRated,
});

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Home)
