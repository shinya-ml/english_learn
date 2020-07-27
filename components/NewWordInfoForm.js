import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editWord } from '../ducks/slice';

class NewWordInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      english: '',
      japanese: '',
    };
    this.onChangeEnglish = this.onChangeEnglish.bind(this);
    this.onChangeJapanese = this.onChangeJapanese.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChangeEnglish(e) {
    this.setState({
      english: e.target.value,
    });
  }

  onChangeJapanese(e) {
    this.setState({
      japanese: e.target.value,
    });
  }

  onClick() {
    const payload = {
      index: this.props.index,
      newWord: {
        word: this.state.english,
        ja: this.state.japanese,
      },
    };
    this.props.editWord(payload);
    this.setState({
      english: '',
      japanese: '',
    });
  }

  render() {
    return (
      <div>
        <h1>Edit</h1>
        <input
          onChange={this.onChangeEnglish}
          value={this.state.english}
          placeholder="englsih"
        />
        <input
          onChange={this.onChangeJapanese}
          value={this.state.japanese}
          placeholder="japanese"
        />
        <button onClick={this.onClick}>submit</button>
      </div>
    );
  }
}
const mapDispatchToProps = { editWord };
export default connect((state) => state, mapDispatchToProps)(NewWordInfoForm);
