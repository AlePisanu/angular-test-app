/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetUserInfoService } from './get-user-info.service';

describe('Service: GetUserInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUserInfoService]
    });
  });

  it('should ...', inject([GetUserInfoService], (service: GetUserInfoService) => {
    expect(service).toBeTruthy();
  }));
});
