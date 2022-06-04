import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLayoutComponent} from "./shared/common/layouts/page-layout/page-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {NotFoundComponent} from "./shared/common/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: PageLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '**', component: NotFoundComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
