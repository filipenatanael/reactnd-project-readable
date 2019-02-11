import { connect } from 'react-redux';
import {
    voteForPost,
    fetchPostCommentsCount,
} from '../actions';


import Post from '../components/Post'

function mapStateToProps (state, ownProps) {
  return {}
}

export default connect(mapStateToProps, {
  voteForPost,
  fetchPostCommentsCount
})(Post)
