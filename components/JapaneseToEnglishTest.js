import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Card, Typography, Grid } from '@material-ui/core';
import { getRandomInt } from '../util';

// TODO: 一度出題した単語は出ないようにする
// TODO: トータルの出題数を選べるようにする

export const JapaneseToEnglishTest = () => {
  const wordList = useSelector((state) => state.word.wordList);
  const [restWordList, setRestWordList] = useState(wordList);
  const [showedIndex, setShowedIndex] = useState(0);
  const [jaWord, setJaWord] = useState('');
  const [testInfo, setTestInfo] = useState({ correct: 0, wrong: 0 });

  const selectNextWord = () => {
    if (jaWord === '') {
      //TODO: error message
    } else {
      if (jaWord === restWordList[showedIndex].ja) {
        setTestInfo({ correct: testInfo.correct + 1, wrong: testInfo.wrong });
      } else {
        setTestInfo({ correct: testInfo.correct, wrong: testInfo.wrong + 1 });
      }
      setRestWordList([
        ...restWordList.slice(0, showedIndex),
        ...restWordList.slice(showedIndex + 1, restWordList.length),
      ]);
      setShowedIndex(getRandomInt(0, restWordList.length - 1));
      setJaWord('');
    }
  };

  const showWord = () => {
    if (restWordList.length === 0) {
      return 'Completed';
    } else {
      return restWordList[showedIndex].word;
    }
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2">
            Test translating japanese to english
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">Correct: {testInfo.correct}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">Wrong: {testInfo.wrong}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <Typography variant="h4">{showWord()}</Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            onChange={(e) => setJaWord(e.target.value)}
            value={jaWord}
            placeholder="japanese word"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={selectNextWord}
          >
            Answer
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
