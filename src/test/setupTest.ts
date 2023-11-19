import { afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './server';

// import { expect } from 'vitest';
// import matchers from '@testing-library/jest-dom/matchers';
// expect.extend(matchers);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
