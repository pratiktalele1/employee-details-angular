import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public datas=[]
  public update:number;
  public size;
  
  constructor(private data:DataTransferService, private nevigate:Router) { }

  ngOnInit(): void {
    this.data.getEmployees()
    .subscribe(val => this.datas=val);
  }



  edit(value){
    this.update=value;
    console.log(this.update);
    this.nevigate.navigate(['add',this.update]);
  }

  remove(value){
      this.data.removeEmployee(value).subscribe(data=>console.log("delete successful"));  
      window.location.reload();
  }


 
}
