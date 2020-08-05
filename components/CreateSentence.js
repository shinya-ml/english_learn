import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// TODO: ランダムに英単語を選ぶ
// TODO: それを使った英文を入力させる
// TODO: nextボタンを押したら英単語を選びなおす
export const CreateSentence = () => {
  const wordList = useSelector((state) => state.word.wordList);
  return <div></div>;
};
