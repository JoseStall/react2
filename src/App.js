import React, { Component } from 'react';
import './App.css';
import BoardCase from './KeyBoard';
import shuffle from 'lodash.shuffle'
const words = ['bonjour', 'chateau', 'voiture', 'philosophie', 'jetable', 'javascript'];
var word = shuffle(words)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: word[0],
      searchWord: '_'.repeat(word[0].split('').length),
      usedLetters: [],
      guesses: 0,
      winCondition: false
    }
  }
  
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  handleKeyClick = (key) => {
    this.feedback = "disabled"
    this.state.usedLetters.push(key)
    let word = this.state.word;
    let searchWord = word.replace(/\w/g,
      (letter) => (this.state.usedLetters.includes(letter) ? letter : '_')
    )
    this.setState({ searchWord: searchWord, usedLetters: this.state.usedLetters })
    let guesses = this.state.guesses;
    word === searchWord ? this.setState({ winCondition: true }) : this.setState ({ guesses: guesses += 1 });
    
  }
  getFeedbackForKey(letter) {
    return this.state.usedLetters.includes(letter)? 'disabled' : ''
  }

  handleResetGame = () => {
    var word = shuffle(words)
    this.setState({
      word: word[0],
      searchWord: '_'.repeat(word[0].split('').length),
      usedLetters: [],
      guesses: 0,
      winCondition: false
    })

  }


  render() {
    return (
      <div className="App">
        <h1> Bienvenue dans le jeu du Pendu</h1>
        {this.state.guesses !== 0 && (<p> Essais  {this.state.guesses}</p>)}
        <h3 className="searchWord p-5"> {this.state.searchWord}</h3>
        {!this.state.winCondition ? (<p>
          {this.letters.map((letter, index) => (
            < BoardCase
              key={index}
              index={index}
              feedback={this.getFeedbackForKey(letter)}
              letter={letter}
              onClick={this.handleKeyClick}
            />
          )
          )} </p>) :
          (<h3> Bravo c'est gagné pour toi <p>Pour rejouer c'est par ici</p><button className="btn btn-success" onClick={this.handleResetGame}>ok</button></h3>
          )}
      </div>
    );
  }
}

export default App;
