import React, { Component } from 'react';
import './App.css';
import BoardCase from './KeyBoard';
import shuffle from 'lodash.shuffle'


class App extends Component {
  constructor(props) {
    super(props);
    const words = ['bonjour', 'chateau','voiture'];
    var word = shuffle(words)
    this.state = { word : word[0].split(''),
                    searchWord : '_'.repeat(word[0].split('').length)}
    console.log(word)

  }
  letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  handleKeyClick = (letter) => {
    console.log(letter, this.index, this)
    var find = ''
    if (this.state.word.includes(letter)) {
      this.state.word.map(
        (data, index) => data == letter ? find += letter : find += '_'    
   //   this.state.searchWord.replace(/\w/g,
     // (letter) => (this.state.word.includes(letter) ? letter : '_')
      
    )
    console.log(this.state.searchWord)

  }
  }


  render() {
    return (
      <div className="App">
      <h1> Bienvenue dans le jeu du Pendu</h1>
      <h3 className="searchWord p-5"> { this.state.searchWord }</h3>
      {this.letters.map((letter, index) => (
        < BoardCase
          className="KeyB"
          key={index}
          letter={letter}
          disabled={false}
          onClick={this.handleKeyClick} 
        />
      )
        )}
            </div>
    );
  }
}

export default App;
