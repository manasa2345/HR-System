import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Chats } from './chats.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  loadedChat: Chats[];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.loadedChat = this.chatService.chat;
  }

}
