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
    var stateElements = Object.keys(this.props.form).map(key => this.props.form[key]);
    var formElements = stateElements.map((element, idx) => {
      if(element.questionType == 'radio'){
        return(
          <div key = {idx}>
            <p>{element.questionText}</p>
            <RadioButtons
              subItems = {element.subItems} />
          </div>
        );
      } else if (element.questionType == 'number'){
        return(
          <div key = {idx}>
            <p>{element.questionText}</p>
            <NumberInput
              subItems = {element.subItems} />
          </div>
        );
      } else {
          return(
            <div key = {idx}>
              <p>{element.questionText}</p>
              <TextInput
                subItems = {element.subItems} />
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
