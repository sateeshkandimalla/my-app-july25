import { Component } from '@angular/core';
import { VehcilesService } from '../vehciles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any[]=[];
  constructor(private _vehiclesServices:VehcilesService){
   this.loadvehicles();
  }
  loadvehicles(){
    this._vehiclesServices.getVehicles().subscribe(
       (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
    
  }

    delete(id:any){
   if(confirm("are you sure to delete?")==true){
      this._vehiclesServices.deleteVehicles(id).subscribe(
    (data:any)=>{
      alert("record deletedsucesfully")
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
   } else{
    alert("you have cancelled the delete")
   }
  
  }
  searchkeyword:string='';
  search(){
    this._vehiclesServices.getFilteredVehicles(this.searchkeyword).subscribe
    ((data:any)=>{
      console.log(data);
      this.vehicles=data;

    },(err:any)=>{
      alert("internal server error")
    }
    )
  }
  columnName:string='';
  sortOrder:string='';
  sort(){
    this._vehiclesServices.getSortedVehicles(this.columnName,this.sortOrder).subscribe
    ((data:any)=>{
    console.log(data);
    this.vehicles=data;

    },(err:any)=>{
      alert("Internal Server error")
    }
  )
  }

  items:number=0;
  pageNumber:number=0;
  pagination(){
    this._vehiclesServices.getpaginnatedVehicles(this.items,this.pageNumber).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;

      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  

  



}