import {Component, OnInit} from '@angular/core';

import {TranslateService} from '../services/translate/translate.service';
import {WordQueueService} from '../services/word-queue/word-queue.service';
import {StorageService} from '../services/storage/storage.service';

@Component({
  selector: 'app-recently-added-page',
  templateUrl: './recently-added-page.component.html',
  styleUrls: ['./recently-added-page.component.css'],
  providers: [
    TranslateService,
    WordQueueService,
    StorageService
  ]
})

export class RecentlyAddedPageComponent implements OnInit {

  dict: Array<{ word: string, translate: string }>;

  isAdd = false;
  canSave: boolean;
  userInput = '';
  dictItems: Array<{ word: string, translate: string }> = [];

  constructor(
    private translateService: TranslateService,
    private wordQueueService: WordQueueService,
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
    this.dict = this.storageService.getDictFromStorage();
  }

  onTranslate(): void {
    this.canSave = false;
    this.wordQueueService.getDictItemsFromInput(this.userInput)
      .subscribe(
        data => this.dictItems.push(data),
        err => console.error(),
        () => this.canSave = true
      );
  }

  onSave(): void {
    this.storageService.addDictItems(this.dictItems);
    this.dictItems = [];
    this.userInput = '';
    this.isAdd = false;
    this.dict = this.storageService.getDictFromStorage();
  }

}
