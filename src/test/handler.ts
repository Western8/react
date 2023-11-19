import { http, HttpResponse } from 'msw';
import { apiResults } from './mocks';

export const handlers = [
  http.get('/page/1', () => {
    console.log('!!! /page/1 MOCKKKK RESPONSE!!!!!!!!');
    const temp = HttpResponse.json(apiResults);
    console.log('tempppp /page/1', temp);
    return HttpResponse.json(apiResults);
  }),
  http.get('https://swapi.dev/api/people/', () => {
    console.log('!!! MOCKKKK RESPONSE!!!!!!!!  https://swapi.dev/api/people/');
    const temp = HttpResponse.json(apiResults);
    console.log('tempppp https://swapi.dev/api/people/', temp);
    return HttpResponse.json(apiResults);
  }),
];
