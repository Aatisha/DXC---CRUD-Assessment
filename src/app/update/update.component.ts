import { Component, OnInit, Input } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private departmentServive:DepartmentService) { }
  @Input() index: number;
  department=new Department();
  ngOnInit() {
    this.department=this.departmentServive.deptlist[this.index];
  }
  deptUpdate()
  {
    this.departmentServive.deptlist[this.index]=this.department;
  }
}
