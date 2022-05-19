import { TestBed } from '@angular/core/testing';

import { ThisorthatService } from './thisorthat.service';

describe('ThisorthatService', () => {
  let service: ThisorthatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThisorthatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
