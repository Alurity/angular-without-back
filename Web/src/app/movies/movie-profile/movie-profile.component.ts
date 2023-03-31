import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.scss']
})
export class MovieProfileComponent {

	constructor (
		private route: ActivatedRoute,
	) {
	}

	onClick() {
		console.log(this.route);
	}
}
