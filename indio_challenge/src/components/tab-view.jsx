import React, { Component } from 'react';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';

import FormBuilder from './form-builder';

//in order to pass state across tabs, the logic for modifying the state needs
// to be passed down into the formBuilder from TabViewer

class TabView extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabIndex: 0,
      form: JSON.parse(localStorage.getItem('indioForm') || '[]') // Either retrieve the JSON or create an empty array
      //localStorage info: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
      };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.addSubInput = this.addSubInput.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  handleTabChange(tabIndex){
    this.setState({tabIndex});
  }

  addInput(){

  }

  removeInput(){

  }

  addSubInput(){

  }

  onInputChange(){
    
  }

  render() {
    return (
     <section>
       <Tabs index={this.state.tabIndex} onChange={this.handleTabChange} inverse>
         <Tab label='Create'>
           <h2> Welcome to the Indio Form Generator</h2>
           <p> Select a question type and create your form. You can preview your form in
           the <b>Preview</b> tab, and export your form data as JSON in the <b>Export</b> tab.</p>
         <FormBuilder
           form = {this.state.form}
           addInput = {this.state.addInput}
           removeInput = {this.state.removeInput}
           addSubInput = {this.state.addSubInput}
           onInputChange = {this.state.onInputChange}
                />
         </Tab>
         <Tab label='Preview'><small>Secondary content</small></Tab>
         <Tab label='Export'><small>Disabled content</small></Tab>
       </Tabs>
     </section>
   );
  }
}

export default TabView; // Don’t forget to use export default!
