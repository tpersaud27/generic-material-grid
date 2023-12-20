import { Component, OnInit } from '@angular/core';
import { UserListService } from './service/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  columnHeader = {
    id: 'ID',
    userName: 'User Name',
    userEmail: 'Email',
    age: 'Age',
    actions: 'Actions'
  };

  tableData: any[];

  constructor(public userListService: UserListService) {}

  ngOnInit() {
    // Apply condition on edit and delete button
    this.userListService.getList().subscribe(res => {
      this.tableData = res.map(item => {
        if (item['age'] === '20') {
          item['isEditable'] = false;
          return item;
        } else if (item['age'] === '30') {
          item['isDeletable'] = false;
          return item;
        }
        return item;
      });
    });
  }
}
