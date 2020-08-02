import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWord } from '../ducks/slice';
import NewWordInfoForm from './NewWordInfoForm';

export const WordList = () => {
  const wordList = useSelector((state) => state.word.wordList);
  console.log(wordList);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Word List</h1>
      <table>
        <thead>
          <tr>
            <th>English Word</th>
            <th>Japanese Word</th>
          </tr>
        </thead>
        <tbody>
          {wordList.map((word, index) => (
            <tr key={index}>
              <td>{word.word}</td>
              <td>{word.ja}</td>
              <td>
                <button onClick={() => dispatch(deleteWord(index))}>
                  delete
                </button>
              </td>
              <td>
                <NewWordInfoForm index={index} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
