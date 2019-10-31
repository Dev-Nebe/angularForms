import { UserSettings } from './user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/eu14U8Aj2O6fTFkocxB3', userSettings);
    // return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
