import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TagsStateService } from '../state/tags-state.service';

@Injectable({ providedIn: 'root' })
export class TagsService {
  get list$(): Observable<string[]> {
    return this.tagsStateService.getTags();
  }

  constructor(private tagsStateService: TagsStateService) {
    window.addTag = (tagName: string): void => this.addTag(tagName);
    window.removeTag = (tagName: string): void => this.removeTag(tagName);
  }

  has(tagNAme: string): Observable<boolean> {
    return this.tagsStateService.getTags().pipe(map((list) => list.includes(tagNAme)));
  }

  removeTag(tagName: string): void {
    this.tagsStateService.removeTag(tagName);
  }

  addTag(tagName: string): void {
    this.tagsStateService.setTag(tagName);
  }
}
