import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
    sri:any[]=[];
    constructor(private _pinterestServices:PinterestService){
    _pinterestServices.getpinterest().subscribe(
        (data:any)=>{
          console.log(data);
          this.sri=data;
          console.log("pinterest data:",this.sri);
        },(err:any)=>{
          alert("Internal server Error")
        }
      )}

}
