import React, { Component } from 'react';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';

import FormBuilder from './form-builder';

// TabView handles creating, editing and saving the form state. The form state is created in
// the form-builder, the form is itself created in the form-viewer, and it is converted into
// exportable JSON with the export componenet

class TabView extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      form: JSON.parse(localStorage.getItem('indioForm') || '[]') // Either retrieve the JSON or create an empty array
      //localStorage info: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
      };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(index){
    this.setState({index});
  }

  render() {
    return (
     <section>
       <Tabs index={this.state.index} onChange={this.handleTabChange} inverse>
         <Tab label='Create'>
           <h2> Welcome to the Indio Form Generator</h2>
           <p> Select a question type and create your form. You can preview your form in
           the <b>Preview</b> tab, and export your form data as JSON in the <b>Export</b> tab.</p>
          <FormBuilder />
         </Tab>
         <Tab label='Preview'><small>Secondary content</small></Tab>
         <Tab label='Export'><small>Disabled content</small></Tab>
       </Tabs>
     </section>
   );
  }
}

export default TabView; // Don’t forget to use export default!
