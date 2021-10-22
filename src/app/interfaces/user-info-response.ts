export interface UserInfoData {
    results: ResultUserInfo[];
    info: Info;
}

export interface NameUserInfo {
    title: string;
    first: string;
    last: string;
}

export interface StreetUserInfo {
    number: number;
    name: string;
}

export interface CoordinatesUserInfo {
    latitude: string;
    longitude: string;
}

export interface TimezoneUserInfo {
    offset: string;
    description: string;
}

export interface LocationUserInfo {
    street: StreetUserInfo;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: CoordinatesUserInfo;
    timezone: TimezoneUserInfo;
}

export interface LoginUserInfo {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface DobUserInfo {
    date: Date;
    age: number;
}

export interface RegisteredUserInfo {
    date: Date | string;
    age: number;
}

export interface IdUserInfo {
    name: string;
    value?: any;
}

export interface PictureUserInfo {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface ResultUserInfo {
    gender: string;
    name: NameUserInfo;
    location: LocationUserInfo;
    email: string;
    login: LoginUserInfo;
    dob: DobUserInfo;
    registered: RegisteredUserInfo;
    phone: string;
    cell: string;
    id: IdUserInfo;
    picture: PictureUserInfo;
    nat: string;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}


