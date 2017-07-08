import React, { Component } from 'react';

import InputGroup from './form_input/input_group';

//FormBuilder will manage the overall state of the form

class FormBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
        formState: ''
      };
  }

  render() {
    return (
     <form>
       <InputGroup/>
     </form>
   );
  }
}

export default FormBuilder; // Don’t forget to use export default!
