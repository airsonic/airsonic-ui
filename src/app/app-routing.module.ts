import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: '', component: AlbumsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'album/:id', component: AlbumComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
