import React, { Component} from 'react';
import NumberInput from '../components/form-input/number';
import TextInput from '../components/form-input/text';
import RadioButtons from '../components/form-input/radio';


export const displayConditional = (questionType, value, subInputs) => {
  const subQuestions = [];
  if(questionType == "radio"){
    subInputs.forEach((item,idx) => {
      let key = Object.keys(item)[0];
      if (item[key]['conditionText'] === value){
        let jsx = <div key = {idx}>
                    <p>{item[key].questionText}</p>
                    <RadioButtons
                      subInputs = {item[key].subInputs} />
                  </div>;
        subQuestions.push(jsx);
      }
    });
  } else if (questionType == "number") {
    subInputs.forEach((item,idx) => {
      let key = Object.keys(item)[0];
      if (item[key]['conditionText'] === value){
        subQuestions.push(
          <div key = {idx}>
            <p>{item[key].questionText}</p>
            <NumberInput
              subInputs = {item[key].subInputs} />
          </div>
        );
      }
    });
  } else{
    subInputs.forEach((item,idx) => {
      let key = Object.keys(item)[0];
      if (item[key]['conditionText'] === value){
        subQuestions.push(
          <div key = {idx}>
            <p>{item[key].questionText}</p>
            <TextInput
              subInputs = {item[key].subInputs} />
          </div>
        );
      }
    });
  }
  return subQuestions;
};
