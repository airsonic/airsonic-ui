import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { RolesGuard } from './shared/guards/roles.guard';

import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SettingsComponent } from './settings/settings.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MediaFoldersSettingsComponent } from './settings/media-folders-settings/media-folders-settings.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      canActivate: [AuthGuard],
      children: [
        { path: '', component: SideMenuComponent, outlet: 'side-menu' },
        { path: '', component: TopBarComponent, outlet: 'top-bar' },
        { path: '', component: AlbumsComponent },
        { path: 'album/:id', component: AlbumComponent },
        { path: 'search/:query', component: SearchResultComponent },
        { path: 'profile', component: ProfileComponent, canActivate: [RolesGuard], data: { role: 'settingsRole' } },
        {
          path: 'settings',
          canActivate: [RolesGuard], data: { role: 'adminRole' },
          component: SettingsComponent,
          children: [
            { path: '', redirectTo: '/settings/media-folders', pathMatch: 'full' },
            { path: 'media-folders', component: MediaFoldersSettingsComponent }
          ]
        }
      ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
