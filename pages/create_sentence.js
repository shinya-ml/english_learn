import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CreateSentence } from '../components/CreateSentence';

class CreateSentencePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Create Setence</h1>
        <CreateSentence />
        <Footer />
      </div>
    );
  }
}
export default CreateSentencePage;
