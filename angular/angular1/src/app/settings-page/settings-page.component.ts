import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})

export class SettingsPageComponent implements OnInit {

  languages = [
    'Английский',
    'Суахили'
  ];

  levels = [
    '5',
    '10',
    '20',
    '50',
    '100'
  ];

  selectedLanguage: String = 'Английский';

  selectedLevel: String = '10';

  constructor() { }

  ngOnInit() {
  }

}
