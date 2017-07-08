import React, { Component } from 'react';

import {Tab, Tabs} from 'react-toolbox/lib/tabs';

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
       <Tabs index={this.state.index} onChange={this.handleTabChange}>
         <Tab label='Create'><small>Primary content</small></Tab>
         <Tab label='Preview'><small>Secondary content</small></Tab>
         <Tab label='Export'><small>Disabled content</small></Tab>
       </Tabs>
     </section>
   );
  }
}

export default TabView; // Don’t forget to use export default!
