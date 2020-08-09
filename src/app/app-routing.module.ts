import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from 'src/app/test1/test1.component';
import { Test2Component } from 'src/app/test2/test2.component';
import { Test3Component } from 'src/app/test3/test3.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:Test1Component},
  {path:'home1', component:Test2Component},
  {path:'home2', component:Test3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
