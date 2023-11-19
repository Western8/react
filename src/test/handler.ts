import { http, HttpResponse } from 'msw';
import { apiResults } from './mocks';

export const handlers = [
  http.get('/page/1', () => {
    return HttpResponse.json(apiResults);
  }),
  http.get('https://swapi.dev/api/people/', () => {
    return HttpResponse.json(apiResults);
  }),
];
