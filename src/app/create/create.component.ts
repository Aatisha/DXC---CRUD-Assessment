import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  department = new Department();

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() { }

  deptSave() {
    this.departmentService.addDepartment(this.department);
    this.department = new Department();
    const confirmation = confirm("Department Added successfully. Do you want to view the list?");
    if (confirmation) {
      this.router.navigateByUrl('');
    }
  }
}
