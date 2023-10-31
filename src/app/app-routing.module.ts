import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageScreenComponent } from './screens/homepage-screen/homepage-screen.component';
import { AlbumsScreenComponent } from './screens/albums-screen/albums-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageScreenComponent,
  },
  {
    path: 'albums/:id',
    component: AlbumsScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
