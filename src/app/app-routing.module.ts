import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: '', component: ArtistsComponent },
    { path: 'login', component: LoginComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
