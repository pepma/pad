const mocks = new Map<any, any>();

export function mockProperty<T extends {}, K extends keyof T>(object: T, property: K, value: T[K]): void {
  const descriptor = Object.getOwnPropertyDescriptor(object, property);
  const mocksForThisObject = mocks.get(object) || {};
  mocksForThisObject[property] = descriptor;
  mocks.set(object, mocksForThisObject);
  Object.defineProperty(object, property, { get: () => value });
}

export function undoMockProperty<T extends {}, K extends keyof T>(object: T, property: K): void {
  Object.defineProperty(object, property, mocks.get(object)[property]);
}
