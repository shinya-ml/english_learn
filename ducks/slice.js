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
      word: 'apple',
      ja: 'りんご',
    },
  ],
};

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addWord: (state, action) => ({
      ...state,
      wordList: [...wordList, action.payload],
    }),
  },
});
export default wordSlice;
