import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PetstoreOpenAPITagsService } from './petstore-open-apitags.service';

describe('PetstoreOpenAPITagsService', () => {
  let service: PetstoreOpenAPITagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PetstoreOpenAPITagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
