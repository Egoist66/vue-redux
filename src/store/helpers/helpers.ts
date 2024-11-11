import { computed, inject } from "vue";
import { store, type RootState } from "../app-store";
import { storeKey } from "@/plugins/redux-plugin";

export const useDispatch = () => store.dispatch;

export const useSelector = <State extends RootState = RootState>(fn: (state: State) => State[keyof State]) => {
  const rootStore = inject(storeKey) as { state: RootState };
  return computed(() => fn(rootStore.state as State));
};
