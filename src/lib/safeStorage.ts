/**
 * Provide a no-op localStorage shim when running on the server.
 * This prevents libraries that assume localStorage exists from crashing SSR.
 */
export function ensureLocalStorageShim() {
  if (
    typeof globalThis === "undefined" ||
    (globalThis as typeof globalThis & { localStorage?: unknown }).localStorage === undefined ||
    typeof (globalThis as { localStorage?: unknown }).localStorage !== "object" ||
    typeof (globalThis as { localStorage?: { getItem?: unknown } }).localStorage?.getItem !== "function"
  ) {
    const store = new Map<string, string>();

    const shim: Storage = {
      get length() {
        return store.size;
      },
      clear: () => store.clear(),
      getItem: (key: string) => (store.has(key) ? store.get(key)! : null),
      key: (index: number) => Array.from(store.keys())[index] ?? null,
      removeItem: (key: string) => {
        store.delete(key);
      },
      setItem: (key: string, value: string) => {
        store.set(key, String(value));
      },
    };

    (globalThis as { localStorage: Storage }).localStorage = shim;
  }
}

