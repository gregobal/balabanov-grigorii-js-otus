import {Component} from '@angular/core';
import {StorageService} from "./services/storage/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '#словучить';

  constructor(
    private storage: StorageService
  ) {}
}
