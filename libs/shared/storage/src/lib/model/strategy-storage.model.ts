import { BaseStorage } from "./base.storage.model";

export interface StrategyStorage<T> {
  type: BaseStorage<T>;
}
