import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {
  
  userName : String='';
 
resetName()
{
  this.userName=' ';
}

  ngOnInit(): void {
  }

}
