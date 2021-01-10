export interface Adapter<T, R> {
  adapt(data: T): R;
  deadapt?(data: R): T;
}
