import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { LinkResolver } from './link.resolver';

describe('linkResolver', () => {
  let resolver: LinkResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LinkResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
