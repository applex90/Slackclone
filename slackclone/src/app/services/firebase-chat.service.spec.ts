import { TestBed } from '@angular/core/testing';
import { FirebaseChatService } from 'src/app/services/firebase-chat.service';

describe('FireauthService', () => {
  let service: FirebaseChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
