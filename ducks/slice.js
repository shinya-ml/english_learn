import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  wordList: [
    {
      word: 'apple',
      ja: 'りんご',
    },
    {
      word: 'orange',
      ja: 'オレンジ',
    },
    {
      word: 'wheel',
      ja: 'タイヤ',
    },
    {
      word: 'get',
      ja: '手に入れる',
    },
  ],
};

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addWord: (state, action) => ({
      wordList: [...state.wordList, action.payload],
    }),
    deleteWord: (state, action) => ({
      wordList: [
        ...state.wordList.slice(0, action.payload),
        ...state.wordList.slice(action.payload + 1, state.wordList.length),
      ],
    }),
    editWord: (state, action) => ({
      wordList: [
        ...state.wordList.slice(0, action.payload.index),
        action.payload.newWord,
        ...state.wordList.slice(
          action.payload.index + 1,
          state.wordList.length
        ),
      ],
    }),
  },
});
export const { addWord, deleteWord, editWord } = wordSlice.actions;
export default wordSlice;
