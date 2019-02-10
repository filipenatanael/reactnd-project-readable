import { connect } from 'react-redux';
import _ from 'lodash';
import {
    voteForPost,
    fetchPostCommentsCount,
} from '../actions';


import Post from '../components/Post'

function mapStateToProps (state, ownProps) {}

export default connect(mapStateToProps, {
  voteForPost,
  fetchPostCommentsCount
})(Post)
