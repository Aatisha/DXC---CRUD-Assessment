import { Injectable } from '@angular/core';
import {Department} from './department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  deptlist:Department[]=[
    {departmentid:1, name:"Engineering", groupname:"Research and Development", modifieddate:new Date("2002-06-01")},
    {departmentid:2, name:"Tool Design", groupname:"Research and Development",  modifieddate:new Date("2002-06-01")},
    {departmentid:3, name:"Sales", groupname:"Sales and Marketing",  modifieddate:new Date("2002-06-01")},
    {departmentid:4, name:"Marketing", groupname:"Sales and Marketing",  modifieddate:new Date("2002-06-01")},
    {departmentid:5, name:"Purchasing", groupname:"Inventory Management",  modifieddate:new Date("2002-06-01")},
    {departmentid:6, name:"Research and Development", groupname:"Research and Development",  modifieddate:new Date("2002-06-01")},
    {departmentid:7, name:"Production", groupname:"Manufacturing",  modifieddate:new Date("2002-06-01")},
    {departmentid:8, name:"Production Control", groupname:"Manufacturing",  modifieddate:new Date("2002-06-01")},
    {departmentid:9, name:"Human Resources", groupname:"Executive General and Administration",  modifieddate:new Date("2002-06-01")},
    {departmentid:10, name:"Finance", groupname:"Executive General and Administration",  modifieddate:new Date("2002-06-01")},
    {departmentid:11, name:"Information Services", groupname:"Executive General and Administration",  modifieddate:new Date("2002-06-01")},
    {departmentid:12, name:"Document Control", groupname:"Quality Assuarance",  modifieddate:new Date("2002-06-01")},
    {departmentid:13, name:"Quality Assuarance", groupname:"Quality Assuarance",  modifieddate:new Date("2002-06-01")},
    {departmentid:14, name:"Facilities and Maintenance", groupname:"Executive General and Administration",  modifieddate:new Date("2002-06-01")},
    {departmentid:15, name:"Shipping and Recieving", groupname:"Inventory Management",  modifieddate:new Date("2002-06-01")},
    {departmentid:16, name:"Executive", groupname:"Executive General and Administration",  modifieddate:new Date("2002-06-01")},
   
  ];

  constructor() { }
  showDepartments(){
    return this.deptlist;
  }
  addDepartment(department:Department){
    this.deptlist.push(department);
  
  }
}