import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-contact',
  templateUrl: './sales-contact.component.html',
  styleUrls: ['./sales-contact.component.scss']
})
export class SalesContactComponent {
  regionalManagers = [
    {
      location: 'National Account Manager', name: 'Gary Rust', phone: '480-540-3709'
    },
    {
      location: 'East Valley', name: 'Dennis Borup', phone: '480-540-3709'
    },
    {
      location: 'West Valley', name: 'Chad Lohrmann', phone: '480-540-3709'
    },
    {
      location: 'Tucson', name: 'Art Tenette', phone: '480-540-3709'
    },
    {
      location: 'Las Vegas', name: 'Joey Gutierrez', phone: '480-540-3709'
    },
    {
      location: 'Texas', name: 'Derek Hurley', phone: '480-540-3709'
    }
  ]

  accountManagers = [
    {
      location: 'East Valley', name: 'Gary Rust', phone: '480-540-3709'
    },
    {
      location: 'West Valley', name: 'Chad Lohrmann', phone: '480-540-3709'
    },
    {
      location: 'Tucson', name: 'Art Tenette', phone: '480-540-3709'
    },
    {
      location: 'Las Vegas', name: 'Joey Gutierrez', phone: '480-540-3709'
    },
    {
      location: 'Texas', name: 'Derek Hurley', phone: '480-540-3709'
    },
  ]
}