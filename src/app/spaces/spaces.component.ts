import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { SpacesService } from './spaces.service';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.scss',
})
export class SpacesComponent {
  ids: any;
  searchValue: any;
  filter: any = { catid: '', limit: '', offset: '' };
  data: any;

  constructor(private readonly services: SpacesService) {}

  ngOnInit() {
    this.searchValue = '';
    this.ids = [
      {
        id: 1,
        job: 'UI',
        salary: '20k to 30k',
        location: 'chennai',
        imgUrl: '',
        loadMore: false,
      },
      {
        id: 2,
        job: 'java',
        salary: '25k to 30k',
        location: 'banglore',
        imgUrl: '',
        loadMore: false,
      },
      {
        id: '3',
        job: 'Uipath',
        salary: '10k to 30k',
        location: 'karnataka',
        imgUrl: '',
        loadMore: false,
      },
      {
        id: 4,
        job: 'cloud',
        salary: '200k to 30k',
        location: 'noida',
        imgUrl: '',
        loadMore: false,
      },
      {
        id: '5',
        job: 'data',
        salary: '202k to 30k',
        location: 'andhra',
        imgUrl: '',
        loadMore: false,
      },
    ];
  }

  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

  closeMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.closeMenu();
  }

  public getcatproduct(id = '', subcat = '', subsubcat = '') {
    console.log(id);
    this.filter.catid = id;
    this.filter.limit = 5;
    this.filter.offset = 0;

    this.services.getData(this.filter).subscribe((data: Array<object>) => {
      this.data = data;
      console.log(data);
    });
  }

  public getloadmoreproduct() {
    // Increase the offset to load more data
    this.filter.offset += 5;

    this.services.getData(this.filter).subscribe((data: Array<object>) => {
      // Append the new data to the existing list
      this.data = [...this.data, ...data];
      console.log(data);
    });
  }
}
