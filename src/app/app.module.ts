import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/AuthInterceptor';
import { ArtistService } from './shared/service/artist.service';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NotificationService } from './shared/service/notification.service';
import { UserService } from './shared/service/user.service';
import { FormsModule } from '@angular/forms';
import { SystemService } from './shared/service/system.service';
import { AlbumService } from './shared/service/album.service';
import { AlbumComponent } from './album/album.component';
import { MusicDirectoryService } from './shared/service/music-directory.service';
import { TimePipe } from './shared/pipe/time.pipe';
import { MediaControlsComponent } from './shared/component/media-controls/media-controls.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    AlbumsComponent,
    ArtistsComponent,
    LoginComponent,
    AlbumComponent,
    TimePipe,
    MediaControlsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  ArtistService,
  NotificationService,
  UserService,
  SystemService,
  AlbumService,
  MusicDirectoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const APPLICATION_NAME = 'AIRSONIC_UI';
