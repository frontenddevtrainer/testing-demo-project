import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageScreenComponent } from './screens/homepage-screen/homepage-screen.component';
import { AlbumsScreenComponent } from './screens/albums-screen/albums-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageScreenComponent,
  },
  {
    path: 'albums/:id',
    component: AlbumsScreenComponent,
  },
  {
    path: 'user/login',
    component: LoginScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
