import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';


class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text){
    this.setState({text});
  }

  render(){
    return (
      <Input type='text' value={this.state.text} onChange={this.handleChange} />
    );
  }
}

export default TextInput;
