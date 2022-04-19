import { Component } from '@angular/core';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [];
  locationName: string;
  temp;
  weatherData: any;

  initializeItems() {
    this.items = ['Mumbai', 'Delhi', 'Bangalore'];
  }

  constructor(private apixuService: ApixuService) {}

  onSelect(location: any) {
    console.log(location);
    this.apixuService.getWeather(location).subscribe((data) => {
      console.log(data);
      this.weatherData = data;
      console.log(this.weatherData.location.name);
        this.locationName = this.weatherData.location.name;
        this.temp = this.weatherData.current.feelslike;
    });
  }

  onChange(event) {
    this.initializeItems();
    console.log(event.target.value);
    this.items = this.items.filter((str) => {
      return str.includes(event.target.value);
    });
  }
}
