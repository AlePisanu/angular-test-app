import { ResultUserInfo } from './../../interfaces/user-info-response';
import { createAction, props } from '@ngrx/store';
import { UserInfoEnum } from 'src/app/enums/user-info.enum';

export const setUserInfo = createAction(UserInfoEnum.SET_USER_INFO, props<{ payload: ResultUserInfo[] }>());
export const sendUserInfo = createAction(UserInfoEnum.SEND_USER_INFO);