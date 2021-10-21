import { ResultUserInfo, UserInfoData } from './../../interfaces/user-info-response';
import { GetUserInfoService } from './../../services/api/get-user-info.service';
import { sendUserInfo, setUserInfo } from './../actions/user-info.actions';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserInfoEffect {
  constructor(
    private actions$: Actions,
    private userInfoService: GetUserInfoService
  ) { }

    sendUserInfo$ = createEffect(() => this.actions$.pipe(
        ofType(sendUserInfo),
        switchMap(() => (
            this.userInfoService.getUserInfo().pipe(
                map((response: UserInfoData) => {
                    console.log(response.results)
                    return setUserInfo({payload: response.results})
                })
            ))
        )
    ));
}