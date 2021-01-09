import { connect } from 'react-redux'
import Layout from './layout-component'
import * as actions from './layout-store'

const mapStateToProps = () => ({});

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
