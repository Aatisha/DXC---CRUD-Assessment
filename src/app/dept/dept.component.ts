import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})
export class DeptComponent implements OnInit {
  isUpdate = false;
  selectedIndex: number;
  departmentslist: Department[];
  constructor(private deptservice: DepartmentService) { }

  ngOnInit() {
    this.departmentslist = this.deptservice.showDepartments();

  }

  deptEdit(i: number) {
    this.selectedIndex = i;
    console.log(this.selectedIndex);
    this.isUpdate = true;
  }

  deptDelete(i: number) {
    const confirmation = confirm("Are you sure you want to delete?");
    if (confirmation) {
      this.deptservice.deptlist.splice(i, 1);
    }
  }

}
