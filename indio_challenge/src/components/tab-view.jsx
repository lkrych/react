import React, { Component } from 'react';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';

import FormBuilder from './form-builder';

class TabView extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 1,
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
           <h2> Welcome to the Indio Form generator</h2>
           <p> Select a question type and create your form. You can preview your form in
           the <b>Preview</b> tab, and export your form data as JSON in the <b>Export</b> tab</p>
         </Tab>
         <Tab label='Preview'><small>Secondary content</small></Tab>
         <Tab label='Export'><small>Disabled content</small></Tab>
       </Tabs>
     </section>
   );
  }
}

export default TabView; // Don’t forget to use export default!
