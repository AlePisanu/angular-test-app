import { FacadeService } from './services/facade/facade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'User info';

  constructor(
    private facade: FacadeService
  ) {}

  ngOnInit(): void {
    this.facade.setUserInfo()
  }
}
