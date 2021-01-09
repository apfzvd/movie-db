import history from '../history'

export const goBack = () => history.goBack()

export default (path) => history.push(path)
