import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employeeData=[]
  public update:number;
  public searchData=false;
  public selectedEmployee;
  public flag=0;

  /**
   * 
   * @param data to load service
   * @param nevigate for navigation 
   */
  constructor(private data:DataTransferService, private nevigate:Router) { }

  /**
   * loading data from database to show into table
   */
  ngOnInit(): void {
    this.data.getEmployees()
    .subscribe(val => this.employeeData=val);
  }


  /**
   * 
   * @param value  get id for updating data according empId
   */
  edit(value){
    this.update=value;
    console.log(this.update);
    this.nevigate.navigate(['add',this.update]);
  }

  /**
   * 
   * @param value to delete data from database according to empId
   */
  remove(value){
      this.data.removeEmployee(value).subscribe(data=>console.log("delete successful"));  
      window.location.reload();
  }

  /**
   * 
   * @param id to search data according to empId for search box
   */
  sendSearchValue(id:any){
    this.searchData=false;

    this.selectedEmployee=new UserData();
    for(let i=0;i<this.employeeData.length;i++){
      if(this.employeeData[i].empId==id.value){
        this.selectedEmployee.empId=this.employeeData[i].empId;
        this.selectedEmployee.name=this.employeeData[i].name;
        this.selectedEmployee.profile=this.employeeData[i].profile;
        this.selectedEmployee.gender=this.employeeData[i].gender;
        this.selectedEmployee.department=this.employeeData[i].department;
        this.selectedEmployee.salary=this.employeeData[i].salary;
        this.selectedEmployee.startDate=this.employeeData[i].startDate;
        this.flag=1;
      }
    }
    if(this.flag==1){
      this.searchData=true;
      this.flag=0;
    }else{
      alert("Employee Id not Found");
    }
 }
 
  

}
