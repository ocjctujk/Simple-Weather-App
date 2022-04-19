import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApixuService {
  API_KEY = 'b3bd63c8f7dfd277e1dfd8fdc5ce5682';
  constructor(private http: HttpClient) {}

  getWeather(location: any) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=' +
        this.API_KEY +
        '&query='+location
    );

    return this.http.get(
      'https://api.apixu.com/v1/current.json?key=' +
        this.API_KEY +
        '&q=' +
        location
    );
  }
}
