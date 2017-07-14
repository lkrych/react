import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';

import {displayConditional} from '../../util/form-creator-helper';



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
    const subQuestions = displayConditional("text", this.state.text, this.props.subInputs);

    return (
      <div>
        <Input type='text' hint="Please type text here" value={this.state.text} onChange={this.handleChange} />
          <div className = 'sub-questions-form'>
            {subQuestions}
          </div>
      </div>

    );
  }
}

export default TextInput;
