import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { userEndpoint } from 'src/app/utils/urls';
import { ResultUserInfo, UserInfoData } from 'src/app/interfaces/user-info-response';

@Injectable({
  providedIn: 'root'
})
export class GetUserInfoService {

  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(): Observable<UserInfoData> {
    return this.http.get(userEndpoint).pipe(
      map((response: UserInfoData) => {
        return response;
      }));
  }

}
