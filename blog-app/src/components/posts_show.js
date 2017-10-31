import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount(){
    // optionally: could include the next line that says:
    // if we already have post, don't refetch
    // if(!this.props.post){
      // note: props are provided by react-router
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    // }
  }

  onDeleteClick(){
    const {id} = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render(){
    // whatever is in this.props here is the same as ownProps in the mapStateToProps function below
    const {post} = this.props;

    if(!post){
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// ownProps is by called that convention; it is the props object that is going to the component
// in bigger apps often will separate out mapStateToProps to separate file
function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
