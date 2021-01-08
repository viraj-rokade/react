import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Viraj'
  }

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    
    const style = {
      border: '1px solid gray',
      padding: '8px',
      margin: '10px'
    }

    return (
      <div className="App">
        <UserOutput username={this.state.username} style={style} />
        <UserOutput username={this.state.username} style={style} />
        <UserOutput username={this.state.username} style={style} />

        <UserInput changeEvent={this.changeNameHandler} username={this.state.username}/>
      </div>
    );
  }
}

export default App;
