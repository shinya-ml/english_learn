import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteWord } from '../ducks/slice';
import Link from 'next/link';
import NewWordInfoForm from './NewWordInfoForm';

class WordList extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(index) {
    console.log(index);
    console.log(this.props);
    this.props.deleteWord(index);
  }
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
                <td>
                  <button onClick={() => this.onClick(index)}>delete</button>
                </td>
                <td>
                  <NewWordInfoForm index={index} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = { deleteWord };
export default connect((state) => state, mapDispatchToProps)(WordList);
