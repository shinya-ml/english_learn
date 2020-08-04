import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const JapaneseToEnglishTest = () => {
  const wordList = useSelector((state) => state.word.wordList);
  const [showEnWord, setShowEnWord] = useState(wordList[0].word);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const selectNextWord = () => {
    const selectedIndex = getRandomInt(0, wordList.length);
    setShowEnWord(wordList[selectedIndex].word);
  };

  return (
    <div>
      <h1>Test translating japanese to english</h1>
      <p>{showEnWord}</p>
      <button onClick={selectNextWord}>next word</button>
    </div>
  );
};
