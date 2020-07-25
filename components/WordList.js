import React, { Component } from 'react';

class WordList extends Component {
  render() {
    return (
      <div>
        <h1>Word List</h1>
        <p>{this.props.word.wordList[0].word}</p>
        <p>{this.props.word.wordList[0].ja}</p>
      </div>
    );
  }
}
export default WordList;
