import React, { Component } from 'react';
import RadioGroup from 'react-toolbox/lib/radio/RadioGroup';
import RadioButton from 'react-toolbox/lib/radio/RadioButton';


class RadioButtons extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'yes'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.setState({value});
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
