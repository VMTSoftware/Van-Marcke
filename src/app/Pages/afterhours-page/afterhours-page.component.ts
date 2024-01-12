import { Component } from '@angular/core';

@Component({
  selector: 'app-afterhours-page',
  templateUrl: './afterhours-page.component.html',
  styleUrls: ['./afterhours-page.component.scss']
})
export class AfterhoursPageComponent {
  // stores = [
  //   { storeName: 'Store 1', storeManager: 'Manager 1', managerPhone: '123-456-7890', storeManager2: 'Manager 9',  managerPhone2: '123-456-7890' },
  //   { storeName: 'Store 2', storeManager: 'Manager 2', managerPhone: '234-567-8901' },
  //   { storeName: 'Store 3', storeManager: 'Manager 3', managerPhone: '345-678-9012' },
  //   { storeName: 'Store 4', storeManager: 'Manager 4', managerPhone: '456-789-0123'}
  // ];
  stores = [
    { 
      storeName: 'Store 1', 
      managers: [
        { name: 'Manager 1', phone: '123-456-7890' },
      ] 
    },
    {
      storeName: 'Store 2',
      managers: [
        { name: 'Manager 3', phone: '345-678-9012' },
      ]
    },
    {
      storeName: 'Store 3',
      managers: [
        { name: 'Manager 5', phone: '567-890-1234' },
        { name: 'Manager 6', phone: '678-901-2345' }
      ]
    },
    {
      storeName: 'Store 4',
      managers: [
        { name: 'Manager 7', phone: '789-012-3456' },
      ]
    }
    // Add more stores as needed
  ];
}
