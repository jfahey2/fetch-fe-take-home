import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let loadingService: LoadingService;

  function expectLoading(loading: boolean): void {
    const actualLoading = loadingService.getLoading();

    expect(actualLoading).toBe(loading);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    loadingService = new LoadingService();
    // loadingService = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(loadingService).toBeTruthy();
  });

  it('should set the loading boolean', () => {
    expectLoading(false);
  });

  it('return the loading boolean', () => {
    loadingService.setLoading(true);
    expectLoading(true);
  });
});
