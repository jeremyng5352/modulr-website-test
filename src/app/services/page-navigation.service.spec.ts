import { TestBed, inject } from '@angular/core/testing';

import { PageNavigationService } from './page-navigation.service';

describe('PageNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageNavigationService]
    });
  });

  it('should be created', inject([PageNavigationService], (service: PageNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
