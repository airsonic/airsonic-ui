import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AuthGuard } from './shared/guards/auth.guard';

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: '',
      canActivate: [ AuthGuard ],
      children: [
        { path: '', component: AlbumsComponent },
        { path: 'album/:id', component: AlbumComponent },
        { path: 'search/:query', component: SearchResultComponent },
      ]},
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
  ]) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
