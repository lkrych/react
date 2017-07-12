import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';

import InputGroup from './form_input/input_group';


class FormBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
        formState: '',
        inputCounter: 0
      };
    this.addInput = this.addInput.bind(this);
  }

  addInput(){
    this.props.addInput();
  }

  render() {
    const questions = Object.keys(this.props.form).map(key => (
      <InputGroup
          key = {key}
          questionKey = {key}
          questionType = {this.props.form[key]['questionType']}
          questionText = {this.props.form[key]['questionText']}
          removeInput = {this.props.removeInput}
          addSubInput = {this.props.addSubInput}
          onInputChange = {this.props.onInputChange}
          />
      ));
    return (
      <form className="input-form">
        <div className="input-container">
          {questions}
       </div>
       <Button label="Add a new question" onClick ={this.addInput} className="new-question-button" raised primary />
      </form>
   );
  }
}

export default FormBuilder; // Don’t forget to use export default!
