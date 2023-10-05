import { TestBed } from '@angular/core/testing';

import { ErInterceptor } from './er.interceptor';

describe('ErInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErInterceptor = TestBed.inject(ErInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
