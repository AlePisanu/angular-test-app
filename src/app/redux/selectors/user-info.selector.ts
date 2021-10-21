import { State } from './../index';
import { ResultUserInfo } from './../../interfaces/user-info-response';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getUser = createFeatureSelector<ResultUserInfo[]>('userInfo');

export const getUserInfo: MemoizedSelector<State, ResultUserInfo[]> = createSelector(
    getUser,
    (state: ResultUserInfo[]): ResultUserInfo[] => state
);