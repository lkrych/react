import React, { Component} from 'react';
import NumberInput from '../components/form-input/number';
import TextInput from '../components/form-input/text';
import RadioButtons from '../components/form-input/radio';

const makeComponent = (questionType, item, key, idx) => {
  let componentHash = {
    "text": <div key = {idx}>
              <p>{item[key].questionText}</p>
              <TextInput
                subInputs = {item[key].subInputs} />
            </div>,
    "number": <div key = {idx}>
                <p>{item[key].questionText}</p>
                <NumberInput
                  subInputs = {item[key].subInputs} />
              </div> ,
    "radio": <div key = {idx}>
                <p>{item[key].questionText}</p>
                <RadioButtons
                  subInputs = {item[key].subInputs} />
              </div>
  };

  return componentHash[questionType];
};

export const displayConditional = (questionType, value, subInputs) => {
  const subQuestions = [];
  if(questionType == "radio"){
    subInputs.forEach((item,idx) => {
      let key = Object.keys(item)[0];
      if (item[key]['conditionText'] === value){
        subQuestions.push(makeComponent(item[key].questionType, item, key, idx));
      }
    });
  } else if (questionType == "number") {
    subInputs.forEach((item,idx) => {
      let key = Object.keys(item)[0];
      if (item[key]['conditionText'] === value){
        subQuestions.push(makeComponent(item[key].questionType, item, key, idx));
      }
    });
  } else{
    subInputs.forEach((item,idx) => {
      let key = Object.keys(item)[0];
      if (item[key]['conditionText'] === value){
        subQuestions.push(makeComponent(item[key].questionType, item, key, idx));
      }
    });
  }
  return subQuestions;
};
