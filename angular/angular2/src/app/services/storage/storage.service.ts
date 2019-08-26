import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {filter, map, reduce} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private localStorage = window.localStorage;
  private lang = 'ru-en';

  constructor() {
  }

  getDictFromStorage(): Array<{ word: string, translate: string }> {
    const arr = JSON.parse(this.localStorage.getItem(this.lang));
    return arr instanceof Array ? arr : [];
  }

  addDictItems(dictItems: Array<{ word: string, translate: string }>) {
    const dict = this.getDictFromStorage();
    from(dictItems)
      .pipe(
        filter(item => !dict.find(({word}) => word === item.word)),
        map(item => dict.unshift(item))
      ).subscribe({
        complete: () => {
          this.localStorage.setItem(this.lang, JSON.stringify(dict));
        }
    });
  }

}
