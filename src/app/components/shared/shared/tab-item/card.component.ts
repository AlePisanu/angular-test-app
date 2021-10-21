import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TabListEnum } from 'src/app/enums/tab-list.enum';
import { ItemList } from 'src/app/interfaces/tab-list-icon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() itemList: ItemList[];
  @Input() img: string;
  public tabCurrent: string;
  public tabCurrentTitle: string;
  public tabCurrentText: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (Boolean(changes)) {
      this.changeCardTab(TabListEnum.NAME.toString());
    }
  }

  ngOnInit() {
    this.tabCurrent = TabListEnum.NAME;
  }

  changeCardTab(value: string): void {
    this.tabCurrent = value;
    this.tabCurrentTitle = this.itemList?.find(item => item.tab === value).title;
    this.tabCurrentText = this.itemList?.find(item => item.tab === value).value;
    console.log(this.tabCurrentText)
  }

}
