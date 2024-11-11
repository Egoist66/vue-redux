
import { reactive, type App } from "vue";
import type { EnhancedStore } from "@reduxjs/toolkit";
import type { RootState } from "@/store/app-store";

export const storeKey = Symbol("redux-store");

export const createRedux = (store: EnhancedStore) => {
    const rootStore = reactive<{ state: RootState }>({
        state: store.getState(),
    });

    return  {
        install: (app: App) => {
            app.provide<{ state: RootState }>(storeKey, rootStore);

            store.subscribe(() => {
                rootStore.state = store.getState();
            });
        },
    };
};