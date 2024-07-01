import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelinePrincipalComponent } from './pages/timeline-principal/timeline-principal.component';

const routes: Routes = [
  { path: '', component: TimelinePrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
