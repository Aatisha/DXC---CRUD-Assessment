import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnChanges {

  @Input() index: number;
  department = new Department();

  constructor(private departmentServive: DepartmentService) { }

  ngOnChanges() {
    this.department = this.departmentServive.deptlist[this.index];
  }

  ngOnInit() {
  }

  deptUpdate() {
    this.departmentServive.deptlist[this.index] = this.department;
    this.department = new Department();
  }

}
