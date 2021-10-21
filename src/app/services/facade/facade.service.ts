import { ResultUserInfo } from './../../interfaces/user-info-response';
import { Observable } from 'rxjs';
import { sendUserInfo } from './../../redux/actions/user-info.actions';
import { State } from './../../redux/index';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserInfo } from 'src/app/redux/selectors/user-info.selector';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(
    private store$: Store<State>
  ) { }

  public setUserInfo(): void {
    this.store$.dispatch(sendUserInfo());
  }

  public getUserInfo(): Observable<ResultUserInfo[]> {
    return this.store$.select(getUserInfo);
  }

}
