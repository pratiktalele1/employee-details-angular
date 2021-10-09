import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // data=new UserData();
  public getId;
  data;
  public datas=[];
  public value:any;
  
  constructor(private sendData:DataTransferService,private router:ActivatedRoute,private nevigate:Router) { }

  
  ngOnInit(): void {
   
    this.getId=this.router.snapshot.paramMap.get("id");
    console.log(this.getId);
    this.data=new UserData();
    this.sendData.getDataById(this.getId).subscribe(
      (getData:any) => 
      {
        this.value=getData.data;
        this.data.name=this.value.name;
        this.data.profile=this.value.profile;
        this.data.gender=this.value.gender;
        this.data.salary=this.value.salary;
        this.data.startDate=this.value.startDate;
        this.data.note=this.value.note;
      }
      );

      this.sendData.removeEmployee(this.getId).subscribe(data=>console.log("delete successful")); 


  }

  onsubmit(){
    console.log(this.data);
    this.sendData.enrollEmployee(this.data).subscribe(data=>console.log("successful"));
    this.nevigate.navigate(['home']);
  }


  getVal(value:string){
    this.data.department=value;
  }
  
}
