import { Component, OnInit } from '@angular/core';
import { Department} from '../department';
import {DepartmentService} from '../department.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private departmentService:DepartmentService) { }
   department=new Department ();
   isSave=false;
   ngOnInit() {}
   deptSave()
   {
     this.isSave=true;
     this.departmentService.addDepartment(this.department);
  }
}
