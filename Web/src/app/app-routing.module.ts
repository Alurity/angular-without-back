import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { SeriesListComponent } from './series-list/series-list.component';


const routes: Routes = [
	{
		path: 'series-list',
		component: SeriesListComponent,
	},
	{
		path: 'main',
		component: MainPageComponent,
	},
	{
		path: '',
		redirectTo: '/main',
		pathMatch: 'full',
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
