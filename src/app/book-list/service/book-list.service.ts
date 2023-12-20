import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  tableData: any[] = [
    { id: 1, bookName: 'Are You There, Vodka?', price: 200, author: 'A' },
    {
      id: 2,
      bookName: 'The Devil Wears Prada',
      price: 100,
      author: 'A'
    },
    {
      id: 3,
      bookName: 'The Curious Incident of the Dog',
      price: 400,
      author: 'B'
    },
    {
      id: 4,
      bookName: 'How to Win Friends and Influence',
      price: 300,
      author: 'B'
    },
    {
      id: 5,
      bookName: 'Cloudy with a Chance of Meatballs',
      price: 200,
      author: 'C'
    }
  ];

  getList(): Observable<any> {
    return of(this.tableData);
  }
}
