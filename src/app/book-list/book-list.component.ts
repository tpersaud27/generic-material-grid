import { Component, OnInit } from '@angular/core';
import { BookListService } from './service/book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  columnHeader = {
    id: 'ID',
    bookName: 'Book Name',
    price: 'Price',
    author: 'Author',
    actions: 'Actions'
  };
  tableData: any[];

  constructor(public bookListService: BookListService) {}

  ngOnInit() {
    // Apply condition on edit and delete button
    this.bookListService.getList().subscribe(res => {
      this.tableData = res.map(item => {
        if (item['author'] === 'A') {
          item['isEditable'] = false;
          return item;
        }
        if (item['author'] === 'B') {
          item['isDeletable'] = false;
          return item;
        }
        return item;
      });
    });
  }
}
