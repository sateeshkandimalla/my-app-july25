import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
email:any[]=[];
    constructor(private _emailServices:EmailService){
       _emailServices.getemail().subscribe(
      (data:any)=>{
        console.log(data);
        this.email=data;
        console.log("flipkart data:",this.email);
      },(err:any)=>{
        alert("Internal server Error")
      }
    )}

    }


