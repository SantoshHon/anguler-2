import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  allowNewServer :boolean=true;
  serverCreationStatus :String="No server Was created";
  serverName : String= "" ;

  constructor() 
  {
      setTimeout(() => {
    this.allowNewServer=false;
    
  }, 5000);}
  onCreateServer(){
    this.serverCreationStatus="Server was Created!";
  }
  onUpdateServerName(event :Event) {
    this.serverName= (<HTMLInputElement> event.target).value;


  }

  ngOnInit(): void {
  }

}
