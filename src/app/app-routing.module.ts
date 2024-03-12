import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacesComponent } from './spaces/spaces.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  routes = [
    {
      path: 'spaces',
      component: SpacesComponent,
    },
  ];
}
