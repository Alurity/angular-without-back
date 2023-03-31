import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MovieModule } from './movies/movie.module';

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		SeriesListComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MovieModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
