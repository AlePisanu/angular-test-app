import { ResultUserInfo } from './../../interfaces/user-info-response';
import { Action, createReducer, on } from '@ngrx/store';
import { setUserInfo } from '../actions/user-info.actions';

const initialState: ResultUserInfo[] = [];

const reducer = createReducer(
  initialState,
  on(setUserInfo, (state, payload) => ({
    ...state,
    ...payload.payload
  })),
);

export function UserInfoReducer(state = initialState, action: Action) {
  return reducer(state, action);
}

