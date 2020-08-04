import React from 'react';
import Link from 'next/link';

export const Buttons = () => {
  return (
    <div>
      <button>Button</button>
      <Link href="/japanese_to_english_test">
        <button>Test: Ja to En</button>
      </Link>
    </div>
  );
};
