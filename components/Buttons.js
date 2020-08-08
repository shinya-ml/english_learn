import React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';

export const Buttons = () => {
  return (
    <div>
      <Link href="/japanese_to_english_test">
        <Button color="primary" variant="contained">
          Test: Ja to En
        </Button>
      </Link>
    </div>
  );
};
