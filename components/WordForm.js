import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWord } from '../ducks/slice';

class WordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enWord: '',
      jaWord: '',
    };
    this.onChangeEnWord = this.onChangeEnWord.bind(this);
    this.onChangeJaWord = this.onChangeJaWord.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChangeEnWord(e) {
    this.setState({
      enWord: e.target.value,
    });
  }
  onChangeJaWord(e) {
    this.setState({
      jaWord: e.target.value,
    });
  }

  onClick() {
    const newWord = {
      word: this.state.enWord,
      ja: this.state.jaWord,
    };
    this.props.addWord(newWord);
    this.setState({
      enWord: '',
      jaWord: '',
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.onChangeEnWord} value={this.state.enWord} />
        <input onChange={this.onChangeJaWord} value={this.state.jaWord} />
        <button onClick={this.onClick}>Add word</button>
      </div>
    );
  }
}
const mapDispatchToProps = { addWord };
export default connect((state) => state, mapDispatchToProps)(WordForm);
