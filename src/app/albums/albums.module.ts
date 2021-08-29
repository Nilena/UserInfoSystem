import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAlbumsComponent } from './Components/user-albums/user-albums.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'show',
  component:UserAlbumsComponent
}];


@NgModule({
  declarations: [
    UserAlbumsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AlbumsModule { }
