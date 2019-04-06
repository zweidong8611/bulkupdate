import React, { Component } from 'react';
import Myfoot from './Myfoot'

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron" >

          <select className="custom-select custom-select-lg mb-3" defaultValue="One">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select className="custom-select" defaultValue={[]} multiple>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          
        </div>
        <Myfoot></Myfoot>
      </div>
    );
  }
}

export default App;
