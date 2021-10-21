/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacadeService } from './facade.service';

describe('Service: Facade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacadeService]
    });
  });

  it('should ...', inject([FacadeService], (service: FacadeService) => {
    expect(service).toBeTruthy();
  }));
});
