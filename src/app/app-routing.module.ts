import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { RolesGuard } from './shared/guards/roles.guard';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ProfileComponent } from './profile/profile.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

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
        { path: 'profile', component: ProfileComponent, canActivate: [RolesGuard], data: { role: 'settingsRole' } }
      ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
