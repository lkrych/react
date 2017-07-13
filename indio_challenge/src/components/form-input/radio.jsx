import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';


class RadioButtons extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <RadioGroup name='binary' value={this.state.value} onChange={this.handleChange}>
        <RadioButton label='Yes' value='yes'/>
        <RadioButton label='No' value='no'/>
      </RadioGroup>
    );
  }
}

export default RadioButtons;
