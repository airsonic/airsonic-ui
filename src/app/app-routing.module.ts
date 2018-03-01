import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { RolesGuard } from './shared/guards/roles.guard';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { SearchResultComponent } from './search-result/search-result.component';
import {UserSettingsComponent} from './user-settings/user-settings.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: '',
      canActivate: [ AuthGuard ],
      children: [
        { path: '', component: AlbumsComponent },
        { path: 'album/:id', component: AlbumComponent },
        { path: 'search/:query', component: SearchResultComponent },
        { path: 'profile', component: ProfileComponent, canActivate: [ RolesGuard ], data: { role: 'settingsRole' } },
        { path: 'settings/user', component: UserSettingsComponent }
      ]},
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
  ]) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
