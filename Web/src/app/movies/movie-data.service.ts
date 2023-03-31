import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})

export class MovieDataService {

	readonly route = 'https://ec2-52-15-102-134.us-east-2.compute.amazonaws.com/api/movies';

	constructor(private html: HttpClient) { }

	getList(): Observable<any> {
		return this.html.get<any>(this.route);
	}
}