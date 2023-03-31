import { MovieProfileComponent } from './movie-profile/movie-profile.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
	{
		path: 'movies',
		component: MovieListComponent,
	},
	{
		path: 'movies/:id',
		component: MovieProfileComponent,
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [RouterModule]
})
export class MovieRoutingModule {}