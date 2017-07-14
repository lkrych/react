import React, { Component } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';

import NumberInput from './form-input/number';
import TextInput from './form-input/text';
import RadioButtons from './form-input/radio';

import { displayState } from '../util/display-state';

class FormCreator extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var stateElements = displayState(this.props.form);
    var formElements = stateElements.map((element, idx) => {
      if(element.questionType == 'radio'){
        return(
          <div key = {idx}>
            <p>{element.questionText}</p>
            <RadioButtons />
          </div>
        );
      } else if (element.questionType == 'number'){
        return(
          <div key = {idx}>
            <p>{element.questionText}</p>
            <NumberInput />
          </div>
        );
      } else {
          return(
            <div key = {idx}>
              <p>{element.questionText}</p>
              <TextInput />
            </div>
          );
      }
    });

    return(
      <div>
        <form className="output-form">
          {formElements}
        </form>
      </div>


    );
  }
}

export default FormCreator;
