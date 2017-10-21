import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

// this is same as matchDispatchToProps in separate function as done in previous apps
// export default connect(null, {fetchPosts: fetchPosts})(PostsIndex); --> below is shortened with ES6 syntax
export default connect(null, {fetchPosts})(PostsIndex);
