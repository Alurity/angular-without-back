import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './movie-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor (private dataService: MovieDataService) {
  }
	ngOnInit(): void {
		this.dataService.getList().subscribe(res => console.log(res));
	}

  
}
