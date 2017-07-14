import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';


class NumberInput extends Component {
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
      <Input type='text' hint="Please type a number here" value={this.state.text} onChange={this.handleChange} />
    );
  }
}

export default NumberInput;
