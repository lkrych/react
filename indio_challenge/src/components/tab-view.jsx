import React, { Component } from 'react';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import merge from 'lodash/merge';

import FormBuilder from './form-builder';
const uuidv1 = require('uuid/v1');

//in order to pass state across tabs, the logic for modifying the state needs
// to be passed down into the formBuilder from TabViewer

class TabView extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabIndex: 0,
      form: JSON.parse(localStorage.getItem('indioForm') || '{}'), // Either retrieve the JSON or create an empty array
      //localStorage info: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
      // subInputs: {}
      };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.addSubInput = this.addSubInput.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount(){
    // let subInputs = {};
    // Object.keys(this.state.form).forEach(key => {
    //   this.state.form[key]['subInputs'].forEach(subInputKey => {
    //     if (subInputs[key]){
    //       subInputs[key].push(subInputKey);
    //     }else{
    //       subInputs[key] = [subInputKey];
    //     }
    //   });
    // });
    //
    // this.setState({
    //   subInputs
    // });
  }

  componentDidUpdate(){
    localStorage.setItem('indioForm', JSON.stringify(this.state.form));
  }

  handleTabChange(tabIndex){
    this.setState({tabIndex});
  }

  //allows questions to be added to form state
  addInput(){
    let inputId = uuidv1();
    var newInput = {};
    newInput[inputId] = {questionText: '', questionType: '', subInputs: []};
    this.setState({
      form: merge({}, this.state.form, newInput)
    });
  }

  //allows questions to be deleted
  removeInput(questionId){
    const newForm = this.state.form;
    delete newForm[questionId];
    this.setState({
      form: newForm
    });
  }
  //allows questions to be nested
  addSubInput(parentId){
    console.log('addSubInput was just called');
    let inputId = uuidv1();
    var newInput = {};
    newInput[inputId] = {condition: '', conditionText: '',
                        questionText: '', questionType: '', subInputs: []};
    console.log('new input', newInput);
    var newForm = this.state.form;
    var parent = newForm[parentId];
    console.log('parent subInputs', parent.subInputs);
    parent.subInputs.push(newInput);
    console.log('updated parent', parent);
    //update form state
    this.setState({
      form: newForm
    });
    //update subInputs state
    // var parentSubInputs = this.state.subInputs[parentId];
    // if (parentSubInputs){
    //   parentSubInputs.push(inputId);
    //   this.setState({
    //     subInputs: merge({}, this.state.subInputs, parentSubInputs)
    //   });
    // }else{
    //   var newSubInputs = this.state.subInputs;
    //   newSubInputs[parentId] = [inputId];
    //   this.setState({
    //     subInputs: merge({}, this.state.subInputs, newSubInputs)
    //   });
    // }
  }

  //can be called on each individual field that can be edited
  onInputChange(questionId, input){
    const newForm = this.state.form;
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
              addInput = {this.addInput}
              removeInput = {this.removeInput}
              addSubInput = {this.addSubInput}
              onInputChange = {this.onInputChange}
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
