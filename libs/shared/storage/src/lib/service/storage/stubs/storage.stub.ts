/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseStorage } from '../../../model/base.storage.model';

export class StorageTypeStub implements BaseStorage<string> {

  getItem(key: string): string {
    return key;
  }
  clear(): void {
    return;
  }
  setItem(_key: string, _data: string): void {
    return;
  }
  removeItem(_key?: string | RegExp): void {
    return;
  }
}
