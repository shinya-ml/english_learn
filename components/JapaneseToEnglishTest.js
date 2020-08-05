import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getRandomInt } from '../util';

// TODO: 一度出題した単語は出ないようにする
// TODO: トータルの出題数を選べるようにする

export const JapaneseToEnglishTest = () => {
  const wordList = useSelector((state) => state.word.wordList);
  const [showedIndex, setShowedIndex] = useState(0);
  const [jaWord, setJaWord] = useState('');
  const [testInfo, setTestInfo] = useState({ correct: 0, wrong: 0 });

  const selectNextWord = () => {
    if (jaWord === wordList[showedIndex].ja) {
      setTestInfo({ correct: testInfo.correct + 1, wrong: testInfo.wrong });
    } else {
      setTestInfo({ correct: testInfo.correct, wrong: testInfo.wrong + 1 });
    }
    setShowedIndex(getRandomInt(0, wordList.length));
    setJaWord('');
  };

  return (
    <div>
      <h1>Test translating japanese to english</h1>
      <p>correct: {testInfo.correct}</p>
      <p>wrong: {testInfo.wrong}</p>
      <p>{wordList[showedIndex].word}</p>
      <input onChange={(e) => setJaWord(e.target.value)} value={jaWord} />
      <button onClick={selectNextWord}>next word</button>
    </div>
  );
};
