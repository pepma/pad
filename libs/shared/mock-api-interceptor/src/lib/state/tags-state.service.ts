import { Injectable } from '@angular/core';
import { StorageFacadeService } from '@pad/shared/storage';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TagsStateService {
  private PAD_MOCK_TAGS = 'pad_mockTags';

  constructor(private storage: StorageFacadeService<string[]>) {}

  getTags(): Observable<string[]> {
    return this.storage.getItem(this.PAD_MOCK_TAGS).pipe(map((value) => value || []));
  }

  setTag(tagName: string): void {
    this.getTags()
      .pipe(
        map((list) => {
          list.push(tagName);
          return list;
        }),
        switchMap((list) => this.storage.setItem(this.PAD_MOCK_TAGS, list))
      )
      .subscribe();
  }

  removeTag(tagName: string): void {
    this.getTags()
      .pipe(
        map((list) => list.filter((f) => f != tagName)),
        switchMap((list) => this.storage.setItem(this.PAD_MOCK_TAGS, list))
      )
      .subscribe();
  }
}
