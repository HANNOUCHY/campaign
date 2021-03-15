import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OdbService {
  public callurl = '';
  public url = '';
  constructor(private http: HttpClient) {
    this.callurl = environment.odburl;
  }
  call(tag: string, method: string = 'get'): Observable<any> {
    return new Observable(observer => {
      const  urltocall = this.callurl + tag;
      switch (method) {
        case 'get':
          {
            try {
            this.http.get(urltocall).subscribe(results => {
            observer.next(results);
              }, error => {
                observer.error(error);
              });
            } catch {
              console.log('Error while http get');
              observer.error('Error while http get');
            }
          }
          break;
        default:
          observer.error('Wrong method' + method);
      }
    });
  }
}
