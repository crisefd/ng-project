import { Observable } from 'rxjs';
import {
  Injectable
} from '@angular/core';


@Injectable()
export class RequestService {
  fetchMode: RequestMode = 'cors';
  constructor() { }

  request = ({ method, url, qParams, payload }): Observable<any> => {
    const body =
      method === 'GET' && qParams ? new URLSearchParams(qParams) : JSON.stringify(payload);
    const headers = new Headers({
    //  ...authHeader(),
      ...{ 'content-type': 'application/json' }
    });
    const parameters: RequestInit = {
      headers,
      method,
      mode: this.fetchMode,
      cache: 'default'
    };
    if (method !== 'GET' && method !== 'HEAD') {
      parameters.body = body;
    }
    const request = new Request(url, parameters);
    return Observable.create( observer => {
      fetch(request)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
