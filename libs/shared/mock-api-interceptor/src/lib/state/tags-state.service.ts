import { Injectable } from '@angular/core';
import { CoreStorage } from '@pad/shared/storage';

@Injectable({ providedIn: 'root' })
export class TagsStateService {
  private PAD_MOCK_TAGS = 'pad_mockTags';

  constructor(private storage: CoreStorage<string[]>) {}

  getTags(): string[] {
    return this.storage.getItem(this.PAD_MOCK_TAGS) || [];
  }

  setTag(tagName: string): void {
    const list = this.getTags();
    list.push(tagName);
    this.storage.setItem(this.PAD_MOCK_TAGS, list);
  }

  removeTag(tagName: string): void {
    const list = this.getTags();
    this.storage.setItem(
      this.PAD_MOCK_TAGS,
      list.filter((f) => f != tagName)
    );
  }
}
