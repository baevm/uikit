import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import React from 'react';

beforeMount(async ({ App }) => {
  return <App />;
});
