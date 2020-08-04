import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { JapaneseToEnglishTest } from '../components/JapaneseToEnglishTest';

class JapaneseToEnglishTestPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <JapaneseToEnglishTest />
        <Footer />
      </div>
    );
  }
}
export default JapaneseToEnglishTestPage;
