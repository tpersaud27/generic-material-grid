import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookListComponent } from './book-list/book-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { GenericTableComponent } from './generic-table/generic-table.component';

import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableHttpComponent } from './table-http/table-http.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CdkDropList,
    CdkDrag,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BookListComponent,
    UserListComponent,
    GenericTableComponent,
    TableHttpComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
