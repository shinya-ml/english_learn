import React, { Component } from 'react';

class WordList extends Component {
  render() {
    return (
      <div>
        <h1>Word List</h1>
        <table>
          <thead>
            <tr>
              <th>English Word</th>
              <th>Japanese Word</th>
            </tr>
          </thead>
          <tbody>
            {this.props.word.wordList.map((word, index) => (
              <tr key={index}>
                <td>{word.word}</td>
                <td>{word.ja}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default WordList;
