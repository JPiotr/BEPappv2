import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ClientListComponent} from "./buissnes/client/client-list/client-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'BEPappv2';
  viewCategory: number = 0;
  dynamicFilter: string = "";
  @ViewChild(ClientListComponent) child: any;

  public setCardsView(){
    this.viewCategory = 0;
  }
  public setTableView(){
    this.viewCategory = 1;
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.child.dataaa.filter = filterValue.trim().toLowerCase();
    if(this.child.dataaa.paginator){
      this.child.dataaa.paginator.firstPage();
    }
  }

}
