import React from "react";

function dispatchStorageEvent(key: string, newValue) {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
}

const setLocalStorageItem = <T>(key: string, value: any) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeLocalStorageItem = (key: string) => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const getLocalStorageItem = (key: string) => {
  return window.localStorage.getItem(key);
};

const useLocalStorageSubscribe = (callback) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getLocalStorageServerSnapshot = () => {
  throw Error("useLocalStorage is a client-only hook");
};

type Store<T> = React.Dispatch<React.SetStateAction<T>>;
type ReturnType<T> = [T | undefined, Store<T>];
export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): ReturnType<T> {
  const getSnapshot = () => getLocalStorageItem(key);

  const store = React.useSyncExternalStore(
    useLocalStorageSubscribe,
    getSnapshot,
    getLocalStorageServerSnapshot,
  );

  const setState: Store<T> = React.useCallback(
    (v) => {
      try {
        const nextState =
          //@ts-ignore
          typeof v === "function" ? v(JSON.parse(store ?? "")) : v;

        if (nextState === undefined || nextState === null) {
          removeLocalStorageItem(key);
        } else {
          setLocalStorageItem(key, nextState);
        }
      } catch (e) {
        console.warn(e);
      }
    },
    [key, store],
  );

  React.useEffect(() => {
    if (
      getLocalStorageItem(key) === null &&
      typeof initialValue !== "undefined"
    ) {
      setLocalStorageItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? JSON.parse(store) : initialValue, setState];
}
