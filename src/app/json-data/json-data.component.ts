import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.css']
})

export class JsonDataComponent implements OnInit {
jdata:any =[];

  constructor(private studentservice:StudentService ) { }

  ngOnInit(): void {
    this.studentservice.getstudetails().subscribe(res =>{
      console.log(res);
   this.jdata = res;

    })

  }

}
