import { Component, OnInit } from '@angular/core';
import { FirebaseChannelChatThreadService } from 'src/app/services/firebase-channel-chat-thread.service';
import { UiChangeService } from '../services/ui-change.service';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.scss']
})
export class ChatThreadComponent implements OnInit {

  constructor(public fcctService: FirebaseChannelChatThreadService, public uiService: UiChangeService) { 
  }

  ngOnInit(): void {
  }

}
