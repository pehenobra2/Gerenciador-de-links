import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { linkResolver } from './link.resolver';

describe('linkResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => linkResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
