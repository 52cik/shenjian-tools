let store: { [key: string]: any } = {};

export function set(key: string, val: any): void {
  store[key] = val;
}

export function get(key: string): any {
  return store[key];
}

export function del(key: string): void {
  delete store[key];
}

export function clear(): void {
  store = {};
}
