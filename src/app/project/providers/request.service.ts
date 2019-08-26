import { Observable, of } from 'rxjs';
import {
  Injectable
} from '@angular/core';




import {HttpClient} from "@angular/common/http";


@Injectable()
export class RequestService {
  fetchMode: RequestMode = 'no-cors';
  constructor( public httpClient: HttpClient) { }

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
      cache: 'default',
    };
    if (method !== 'GET' && method !== 'HEAD') {
      parameters.body = body;
    }
    // debugger;
    // const request = new Request(url, parameters);
    return this.httpClient.get(url);

    // return Observable.create( observer => {
    //   fetch(request)
    //     .then(response => response.text())
    //     .then(data => {
    //      const  d = Promise.resolve(data ? JSON.parse(data) : {})
    //       observer.next(d);
    //       observer.complete();
    //     })
    //     .catch(error => {
    //       observer.error(error);
    //     });
    // });
  }
}
