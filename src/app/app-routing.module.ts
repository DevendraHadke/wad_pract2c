import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
// import { RegisterformComponent } from './registerform/registerform.component';


const routes: Routes = [
  { path: '',   redirectTo: '/registerlink', pathMatch: 'full' },
  {path:"registerlink", component:RegisterformComponent},
  {path:"loginlink", component:LoginformComponent},
  {path:"userdetaillink", component:UserdetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
