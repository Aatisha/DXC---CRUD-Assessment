import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
@Component({
  selector: 'app-emp-component',
  templateUrl: './emp-component.component.html',
  styleUrls: ['./emp-component.component.scss']
})
export class EmpComponentComponent implements OnInit {
  isUpdate=false;
  selectedIndex :number;
  departmentslist:Department[];
  constructor(private deptservice:DepartmentService)
  { }
  ngOnInit(){
    this.departmentslist=this.deptservice.showDepartments();

  }
  deptEdit(i)
  {
    this.selectedIndex=i;
    this.isUpdate=true; 
  }
  deptDelete(i)
  {
    this.deptservice.deptlist.splice(i,1);
  }
}

