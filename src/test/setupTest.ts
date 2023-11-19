import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { server } from './server';
import { onUnhandledRequest } from 'msw/lib/core/utils/request/onUnhandledRequest';

//console.log('matchers', matchers);
//expect.extend(matchers);

beforeAll(() => server.listen({
  onUnhandledRequest: 'error'
}));

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());