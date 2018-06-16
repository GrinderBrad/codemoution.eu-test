import React, { Component } from 'react';
import './IndexPage.css';

class IndexPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
        }
    }

  render() {
    return (
      <div id="index-page">
         <h1>index page</h1>
      </div>
    );
  }
}

export default IndexPage;
