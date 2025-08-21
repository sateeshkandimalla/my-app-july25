import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
// export class DataBindingComponent {

//   isDataBindingComponent:Boolean=false;
//   image_url:string=""
//   name:string="sateesh";
//   age:number=25;


// greeting(){
//   alert("heloo");
// }
// typing(){
//   alert("mobile");
// }
// fruits(){
//   alert("fruits changed");
// }
// mobile:string='+91';}

export class DataBindingComponent{
  num1:number=0;
  num2:number=0;
  sum:number=0;
  addition(){
    this.sum=this.num1+this.num2;
    console.log(this.sum);
  }

  }
