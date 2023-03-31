import { MovieDataService } from './../movie-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{

	movies: any;

	constructor (
		private route: ActivatedRoute,
		private router: Router,
		private dataService: MovieDataService,
	) {
	}
	ngOnInit(): void {
		this.dataService.getList().subscribe((result) => this.movies = result);
	}



	onClick() {
		console.log(this.route);
		const id = 1;
		this.router.navigate(['/movies', id])
	}
}
