import { mapUserInfoView } from 'src/app/utils/mapper';
import { ItemList, TabList, TabListIcon } from './../../../../interfaces/tab-list-icon';
import { ResultUserInfo } from './../../../../interfaces/user-info-response';
import { FacadeService } from './../../../../services/facade/facade.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public userInfo: ResultUserInfo;
  public itemList: ItemList[];
  public img: string;
  private readonly onDestroy$ = new Subject<void>();

  constructor(
    private facade: FacadeService
  ) {}

  ngOnInit() {
    this.facade.getUserInfo().pipe(
      takeUntil(this.onDestroy$),
      filter((user) => Boolean(user))
    ).subscribe((response) => {
      this.userInfo = response[0];
      this.img = this.userInfo.picture.large
      this.itemList = mapUserInfoView(this.userInfo);
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
