import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
 data:any = [];
  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {this.getData();
  }
 
  
getData(){
  this.data = JSON.parse( this.cookieService.get('result') || '{}')
  console.log(this.data);
  
}

}
