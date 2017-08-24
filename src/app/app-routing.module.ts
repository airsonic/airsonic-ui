import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: '', component: ArtistsComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
