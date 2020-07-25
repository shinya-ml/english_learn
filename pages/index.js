import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import WordList from '../components/WordList';
import Footer from '../components/Footer';

class TopPage extends Component {
  render() {
    const { word } = this.props;
    return (
      <div>
        <Header />
        <Buttons />
        <WordList word={word} />
        <Footer />
      </div>
    );
  }
}
export default connect((state) => state, null)(TopPage);
