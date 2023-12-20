import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  tableData: any[] = [
    {
      id: 1,
      userName: 'Shakib',
      userEmail: 'a@gmail.com',
      age: '20'
    },
    {
      id: 2,
      userName: 'Devil',
      userEmail: 'a@gmail.com',
      age: '20'
    },
    {
      id: 3,
      userName: 'Iron-Man',
      userEmail: 'a@gmail.com',
      age: '20'
    },
    {
      id: 4,
      userName: 'Wonder-Woman',
      userEmail: 'a@gmail.com',
      age: '30'
    },
    {
      id: 5,
      userName: 'Super-Man',
      userEmail: 'a@gmail.com',
      age: '30'
    },
    {
      id: 6,
      userName: 'Shakib',
      userEmail: 'a@gmail.com',
      age: '30'
    },
    {
      id: 7,
      userName: 'Devil',
      userEmail: 'a@gmail.com',
      age: '30'
    },
    {
      id: 8,
      userName: 'Iron-Man',
      userEmail: 'a@gmail.com',
      age: '40'
    },
    {
      id: 9,
      userName: 'Wonder-Woman',
      userEmail: 'a@gmail.com',
      age: '40'
    },
    {
      id: 10,
      userName: 'Super-Man',
      userEmail: 'a@gmail.com',
      age: '40'
    }
  ];

  getList() {
    return of(this.tableData);
  }
}
