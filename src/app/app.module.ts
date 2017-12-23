import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth/AuthInterceptor';
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
import { StreamService } from './shared/service/stream.service';
import { ClickOutsideDirective } from './shared/directive/click-outside.directive';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchService } from './shared/service/search.service';
import { SongTableComponent } from './shared/component/song-table/song-table.component';
import { AlbumCardComponent } from './shared/component/album-card/album-card.component';
import { AUDIO_PROVIDER, AudioProviderFactory } from './shared/provider/audio.provider';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideMenuService } from './shared/service/side-menu.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    ArtistsComponent,
    LoginComponent,
    AlbumComponent,
    TimePipe,
    MediaControlsComponent,
    ClickOutsideDirective,
    SearchResultComponent,
    SongTableComponent,
    AlbumCardComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ArtistService,
  NotificationService,
  UserService,
  SystemService,
  AlbumService,
  MusicDirectoryService,
  StreamService,
  SearchService,
    { provide: AUDIO_PROVIDER, useFactory: AudioProviderFactory },
  SideMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
