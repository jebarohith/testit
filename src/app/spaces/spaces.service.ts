import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpacesService {
  constructor(private readonly https: HttpClient) {}

  getData(payload: any): Observable<any> {
    return this.https.post('assets/data/spaces.json', payload);
  }
}
