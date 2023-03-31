import { MovieRoutingModule } from './movie-routing.module';
import { MovieProfileComponent } from './movie-profile/movie-profile.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [
		
		MovieListComponent,
		MovieProfileComponent,
	],
	imports: [
		BrowserModule,
		MovieRoutingModule,
		HttpClientModule,
	],
	exports: [MovieRoutingModule],
})
export class MovieModule {

}