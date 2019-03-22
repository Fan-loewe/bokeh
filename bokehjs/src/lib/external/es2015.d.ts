interface WeakMap<K extends object, V> {
  delete(key: K): boolean
  get(key: K): V | undefined
  has(key: K): boolean
  set(key: K, value: V): this
}

interface WeakMapConstructor {
  new (): WeakMap<object, any>
  new <K extends object, V>(entries?: ReadonlyArray<[K, V]> | null): WeakMap<K, V>
  readonly prototype: WeakMap<object, any>
}
declare var WeakMap: WeakMapConstructor

interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
  readonly size: number;
}

interface MapConstructor {
  new(): Map<any, any>;
  new<K, V>(entries?: ReadonlyArray<[K, V]> | null): Map<K, V>;
  readonly prototype: Map<any, any>;
}
declare var Map: MapConstructor;
