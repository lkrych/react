import React, { Component } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';


//InputGroup will manage the state of individual components of the form.

class InputGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
        questionType: 'none',
      };
    this.questionTypes = [
    { value: 'text', label: "Text" },
    { value: 'number', label: 'Number' },
    { value: 'radio', label: 'Yes/No' }
      ];
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(questionType){
    this.setState({questionType});
  }

  render() {
    return (
      <div>
        <Dropdown
          auto={false}
          source={this.questionTypes}
          onChange={this.handleChange}
          label='Select question type'
          value={this.state.questionType}
        />
    </div>
   );
  }
}

export default InputGroup; // Don’t forget to use export default!
