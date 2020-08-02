import React, { Component } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../ducks/slice';

export const WordForm = () => {
  const dispatch = useDispatch();

  const [enWord, setEnWord] = useState('');
  const [jaWord, setJaWord] = useState('');

  const onClick = () => {
    dispatch(addWord({ word: enWord, ja: jaWord }));
    setEnWord('');
    setJaWord('');
  };
  return (
    <div>
      <input
        onChange={(e) => setEnWord(e.target.value)}
        value={enWord}
        placeholder="english word"
      />
      <input
        onChange={(e) => setJaWord(e.target.value)}
        value={jaWord}
        placeholder="japanese word"
      />
      <button onClick={onClick}>Add word</button>
    </div>
  );
};
