import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CreateComponent} from './create/create.component';
import { EmpComponentComponent } from './emp-component/emp-component.component';


const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'view',component:EmpComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
