import { TestBed } from '@angular/core/testing';

import { OffresEmploiService } from './offres-emploi.service';

describe('OffresEmploiService', () => {
  let service: OffresEmploiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffresEmploiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
