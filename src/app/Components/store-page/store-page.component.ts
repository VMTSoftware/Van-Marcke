import { Component } from '@angular/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent {
  storeNames = ['Mesa | Country Club', 'Store 2', 'Store 3', 'Store 4'];
  storeManager = ['Jaysen Northern', 'Manager 2', 'Manager 3', 'Manager 4'];
  storeHours = ['helloworld', 'Hours 2', 'Hours 3', 'Hours 4'];
  storeAddress = ['1440 S. Country Club Drive Mesa, AZ 85210, Suite 26', 'Address 2', 'Address 3', 'Address 4'];
  storePhone = ['480-833-1226', 'Phone 2', 'Phone 3', 'Phone 4'];
  afterHours = ['(480)-540-3709', 'After Hours 2', 'After Hours 3', 'After Hours 4'];
  lunchSchedule = ['Tuesday 11:00AM - 1:00PM', 'Lunch Schedule 2', 'Lunch Schedule 3', 'Lunch Schedule 4'];
  apiUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.821547427711!2d-111.8522486848018!3d33.39373798079263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1e3!2s1440+S+Country+Club+Dr+%2326%2C+Mesa%2C+AZ+85210!5e0!3m2!1sen!2sus!4v1561398458809!5m2!1sen!2sus';
  storeDistance = ['0.0', '3.2', '8.2', '6.7'];
}
