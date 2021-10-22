import { ItemList } from './../interfaces/tab-list-icon';
import { TabListEnum } from './../enums/tab-list.enum';
import { ResultUserInfo } from './../interfaces/user-info-response';
import { faCalendar, faEnvelope, faLock, faMap, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { parseISOtoString } from './functions';

export function mapUserInfoView(userInfo: ResultUserInfo): ItemList[] {
    const itemList: ItemList[] = [
        {
            title: 'Hi, My name is',
            value: `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`,
            icon: faUser,
            tab: TabListEnum.NAME
        },
        {
            title: 'My email address is',
            value: userInfo.email,
            icon: faEnvelope,
            tab: TabListEnum.EMAIL
        },
        {
            title: 'My birthday is',
            value: parseISOtoString(userInfo.dob.date),
            icon: faCalendar,
            tab: TabListEnum.BIRTH
        },
        {
            title: 'My address is',
            value: `${userInfo.location.street.number} ${userInfo.location.street.name}`,
            icon: faMap,
            tab: TabListEnum.ADDRESS
        },
        {
            title: 'My phone number is',
            value: userInfo.phone,
            icon: faPhone,
            tab: TabListEnum.PHONE
        },
        {
            title: 'My password is',
            value: userInfo.login.password,
            icon: faLock,
            tab: TabListEnum.PASSWORD
        },
    ];

    return itemList;
}