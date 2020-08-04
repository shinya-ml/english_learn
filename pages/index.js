import React from 'react';
import { Header } from '../components/Header';
import { Buttons } from '../components/Buttons';
import { WordList } from '../components/WordList';
import { WordForm } from '../components/WordForm';
import { Footer } from '../components/Footer';

class TopPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Buttons />
        <WordList />
        <WordForm />
        <Footer />
      </div>
    );
  }
}
export default TopPage;
