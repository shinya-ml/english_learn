import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export const Buttons = () => {
  const wordList = useSelector((state) => state.word.wordList);
  return (
    <div>
      <button onClick={() => console.log(wordList)}>Button</button>
      <Link href="/japanese_to_english_test">
        <button>Test: Ja to En</button>
      </Link>
    </div>
  );
};
