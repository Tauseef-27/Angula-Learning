import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(private cookieService: CookieService,private router:Router, private jSonService: StudentService) {}

  ngOnInit(): void {
    this.jSonService.getstudetails().subscribe(res =>{
      console.log(res);
      
    })
  }

  onSubmit(value: any) {
    this.cookieService.set('result', JSON.stringify(value));
    this.router.navigateByUrl('view');
  
  }
}
