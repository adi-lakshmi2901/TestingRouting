import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
const routes: Routes = [
  { path:'', component: WelcomePageComponent },
  { path:'second-page', component: ChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
