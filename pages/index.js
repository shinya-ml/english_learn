import React, { Component } from 'react';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import WordList from '../components/WordList';
import Footer from '../components/Footer';

class TopPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Buttons />
        <WordList />
        <Footer />
      </div>
    );
  }
}
export default TopPage;
