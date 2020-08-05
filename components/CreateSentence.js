import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getRandomInt } from '../util';

export const CreateSentence = () => {
  const wordList = useSelector((state) => state.word.wordList);
  const [showedIndex, setShowedIndex] = useState(0);
  const [sentence, setSentence] = useState('');
  const selectNextWord = () => {
    setShowedIndex(getRandomInt(0, wordList.length));
  };
  return (
    <div>
      <h1>
        {wordList[showedIndex].word}: {wordList[showedIndex].ja}
      </h1>
      <input onChange={(e) => setSentence(e.target.value)} value={sentence} />
      <button onClick={selectNextWord}>next word</button>
    </div>
  );
};
