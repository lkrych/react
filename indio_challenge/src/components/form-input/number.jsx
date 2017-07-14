import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';

import {displayConditional} from '../../util/form-creator-helper';


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
    const subQuestions = displayConditional("number",this.state.text, this.props.subInputs);


    return (
      <div>
        <Input type='text' hint="Please type a number here" value={this.state.text} onChange={this.handleChange} />
        <div className = 'sub-questions-form'>
          {subQuestions}
        </div>
      </div>
    );
  }
}

export default NumberInput;
