import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface TabListIcon {
    itemList: ItemList[]
    tabList: TabList[]
}

export interface ItemList {
    title: string,
    value: string,
    icon: IconDefinition,
    tab: string
}

export interface TabList {
    icon: string,
    tab: string
}