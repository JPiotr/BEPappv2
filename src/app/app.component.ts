import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BEPappv2';
  viewCategory: number = 0;
  dynamicFilter: string = "";

  public setCardsView(){
    this.viewCategory = 0;
  }
  public setTableView(){
    this.viewCategory = 1;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dynamicFilter = filterValue.trim().toLowerCase();
  }
}
