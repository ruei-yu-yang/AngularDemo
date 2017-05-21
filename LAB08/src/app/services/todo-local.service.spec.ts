import { TestBed, inject } from '@angular/core/testing';

import { TodoLocalService } from './todo-local.service';

describe('TodoLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoLocalService]
    });
  });

  it('should be created', inject([TodoLocalService], (service: TodoLocalService) => {
    expect(service).toBeTruthy();
  }));
});
