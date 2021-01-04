import { Injectable } from '@angular/core';

import { TagsStateService } from '../state/tags-state.service';

@Injectable({ providedIn: 'root' })
export class TagsService {
  get list(): string[] {
    return this.tagsStateService.getTags();
  }

  constructor(private tagsStateService: TagsStateService) {
    window.addError = (tagName: string): void => this.addTag(tagName);
    window.removeError = (tagName: string): void => this.removeTag(tagName);
  }

  has(tagNAme: string): boolean {
    return this.tagsStateService.getTags().includes(tagNAme);
  }

  removeTag(tagName: string): void {
    this.tagsStateService.removeTag(tagName);
  }

  addTag(tagName: string): void {
    this.tagsStateService.setTag(tagName);
  }
}
