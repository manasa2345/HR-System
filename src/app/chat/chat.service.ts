import { Injectable } from "@angular/core";
import { Chats } from "./chats.model";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private _chat: Chats[] = [
    new Chats(
      "p1",
      "Joshua",
      "../assets/img/male.jpg"
    ),
    new Chats(
      "p2",
      "Nithya",
      "../assets/img/female.jpg"
    ),
    new Chats(
      "p3",
      "Nivesha",
      "../assets/img/female.jpg"
    ),
    new Chats(
      "p4",
      "Nirmal",
      "../assets/img/male.jpg"
    )
  ];

  get chat() {
    return [...this._chat];
  }

  constructor() {}
}
