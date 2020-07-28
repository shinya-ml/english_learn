import React, { Component } from 'react';
import { connect } from 'react-redux';

class OldWordInfo extends Component {
  render() {
    const editIndex = this.props.index;
    const editWord = this.props.word.wordList[editIndex];
    return (
      <div>
        <h1>Edit</h1>
        <h1>
          En: {editWord.word} Ja: {editWord.ja}{' '}
        </h1>
      </div>
    );
  }
}
export default connect((state) => state, null)(OldWordInfo);
