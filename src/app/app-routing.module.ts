import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [

  
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'album', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule) },
      { path: 'post', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
      {
        path: '', redirectTo: 'user-list', pathMatch: 'full'
      },
    ],
  },
  {
    path: 'user-details', component: UserDetailsComponent
  },
  
  {
    path: '**', redirectTo: 'user-list', pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }