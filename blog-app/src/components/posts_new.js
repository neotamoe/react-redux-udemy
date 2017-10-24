import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

// redux-form handles the state of our form (values, validation); it doesn't handle talking to
// the back end or server or putting the form on the screen

// meta.error property is automatically added to field object from validate function
class PostsNew extends Component{
  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values){
    // this === component (because of the binding done on line 33)
    console.log(values);
  }

  render() {
    // this comes from the connecting of postsNew to redux-form at bottom of this file
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values){
  // console.log(values)  // {title: 'asdf', categories: 'asdf', content: 'this is some content'}
  const errors = {};

  // validate the inputs from 'values'
  if(!values.title || values.title.length<3){  // could also break this out into two if statements
    errors.title = "Enter a title that is at least 3 characters!";
  }
  if(!values.categories){
    errors.categories = "Enter some categories";
  }
  if(!values.content){
    errors.content = "Enter some content";
  }

  // if errors is empty, the form is fine to submit
  // if errors has any properties, redux-form assumes the form is invalid
  return errors;
}

export default reduxForm({
  // validate: validate,  --> below is shorthand/same since both key and value are same
  validate,
  form: 'PostsNewForm'  // must be unique
})(PostsNew);
