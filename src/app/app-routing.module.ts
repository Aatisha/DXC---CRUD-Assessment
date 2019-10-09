import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeptComponent } from './dept/dept.component';


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: '', component: DeptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
