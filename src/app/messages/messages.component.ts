import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { } // s'abonne au service message service

  ngOnInit(): void {
  }

  // tout passe par les services :
  // 1) les messages sont envoyés par le service hero-service au service message-service 
  // 2) le composant reçoit les messages par l'intermédiaire du message-service 

}
