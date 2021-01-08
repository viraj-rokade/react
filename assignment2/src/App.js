import React, { Component } from 'react';
import './App.css';
import CharComponent from './Components/CharComponent/CharComponent';
import ValidationComponent from './Components/ValidationComponent/ValidationComponent';

class App extends Component {

  state = {
    enteredTextChars: [],
    length: 0
  }

  lengthCheckHandler = (event) => {
    let paraString = event.target.value 
    this.setState({enteredTextChars: paraString.split(''), length: paraString.length})
  }

  deleteLetterHandler = (letterIndex) => {
    // const persons = this.state.persons.slice();
    const letters = [...this.state.enteredTextChars];
    letters.splice(letterIndex, 1);
    this.setState({enteredTextChars: letters});
  }

  render() {

    const style = {
      display:'inline-block',
      padding:'16px',
      textAlign:'center',
      margin: '16px',
      border:'1px solid black'
    }

     let letters = null

     if(this.state.length>0) {
       letters = (
         <div>
           {this.state.enteredTextChars.map((currLetter, index) => {
             return <CharComponent 
             style={style} 
             letter={currLetter}
             click={() => this.deleteLetterHandler(index)}/>
           })}
        </div>
       )
     }
    return (
      <div className="App">
        <input type='text' onChange={this.lengthCheckHandler} />
        <p>Length of the entered text content: {this.state.length}</p>
        <ValidationComponent length={this.state.length}/>
        {letters}
      </div>
    );
  }
}

export default App;
