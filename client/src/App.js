import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/api');
    const body = await response.json();


    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  getAll = async () => {
    const response = await fetch('/all');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
     console.log(body);
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p className="App-intro">{this.state.data}</p>
        </header>
  
      </div>
    );
  }
}

export default App;
