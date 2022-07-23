import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private _http: HttpClient) { 
    this.getstudetails().subscribe(res =>{console.log(res)})
  }

  getstudetails():Observable<any>
  {
    return this._http.get("assets/sample4.json");
  }
}
