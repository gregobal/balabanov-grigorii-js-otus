import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-added-page',
  templateUrl: './recently-added-page.component.html',
  styleUrls: ['./recently-added-page.component.css'],
})

export class RecentlyAddedPageComponent implements OnInit {

  newWords = [
    {
      data: '4 мая 2017',
      words: [
        'to apply - добавлять',
        'education - образование',
        'to go - идти',
        'responsible - ответственный'
      ]
    },
    {
      data: '4 марта 2019',
      words: [
        'to come - приходить',
        'to see - видеть',
        'to win - побеждать'
      ]
    }
  ];

  isAdd: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onAdd(): void {
    this.isAdd = !this.isAdd;
  }

}
