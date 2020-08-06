import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editWord } from '../ducks/slice';

export const NewWordInfoForm = ({ oldWord }) => {
  const dispatch = useDispatch();

  const [english, setEnglish] = useState('');
  const [japanese, setJapanese] = useState('');

  const submit = () => {
    const payload = {
      oldWWord: oldWord,
      newWord: {
        word: english,
        ja: japanese,
      },
    };
    dispatch(editWord(payload));
    setEnglish('');
    setJapanese('');
  };

  return (
    <div>
      <h1>Edit</h1>
      <input
        onChange={(e) => setEnglish(e.target.value)}
        value={english}
        placeholder="englsih"
      />
      <input
        onChange={(e) => setJapanese(e.target.value)}
        value={japanese}
        placeholder="japanese"
      />
      <button onClick={submit}>submit</button>
    </div>
  );
};
