import { ResultUserInfo } from './../interfaces/user-info-response';
import { UserInfoReducer } from './reducers/user-info.reducer';

export interface State {
    userInfo: ResultUserInfo[]
}

export const reducers = {
    userInfo: UserInfoReducer
}

export const metaReducers = {
    metaReducers: [],
    runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
    },
    initialState: {
        userInfo: null
    }
}