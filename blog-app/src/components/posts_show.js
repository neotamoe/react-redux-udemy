import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount(){
    // props provided by react-router
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render(){
    // whatever is in this.props here is the same as ownProps in the mapStateToProps function below
    const {post} = this.props;

    if(!post){
      return <div>Loading...</div>;
    }

    return (
      <div>
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

export default connect(mapStateToProps, { fetchPost })(PostsShow);
