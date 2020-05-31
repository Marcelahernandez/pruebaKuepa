import { CustomHttpService } from './../../../services/customHttp.service';
import { ChatsComponentService } from './../../../services/chats-component.service';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-chats-component',
  templateUrl: './chats-component.component.html',
  styleUrls: ['./chats-component.component.scss']
})
export class ChatsComponentComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  userChat = {
    user:"",
    rol_user:1,
    message:"",
    user_id:0
  }
  local  = {};
  myMessages;
  eventName = "send-message";
  constructor(
    private route: ActivatedRoute,
    private webSocket: ChatsComponentService,
    private customHttpService : CustomHttpService
  ) { }

  ngOnInit(): void {
    this.scrollToBottom();   
    const self =this;
    let local = JSON.parse(localStorage.getItem("user"));
    this.userChat.user = local.name;
    this.userChat.user_id = local.id

    if(local.user_rol == 1){
      this.userChat.rol_user = 1;
    } else if(local.user_rol == 2){ 
      this.userChat.rol_user = 2
    }
    
    self.customHttpService.listen("text-event").subscribe((data) =>{
      self.myMessages = data;
    });
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

  myMessage(){
    const self =this;
    this.webSocket.emit(this.eventName, this.userChat);
    self.webSocket.saveChat(self.userChat).then(
      function (result) {
        if(result){
          console.log('chat guardado');
        } 
      }
    );
    this.userChat.message = '';
    this.scrollToBottom()
  }

  scrollToBottom(): void { 
    try { 
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight; 
    } catch(err) { } 
  }
}
