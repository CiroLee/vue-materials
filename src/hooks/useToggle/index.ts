import { computed, Ref, ref, UnwrapRef } from 'vue';

type ToggleFunc = () => void;

function useToggle<T>(initValue?: T, reverseValue?: T): [Ref<UnwrapRef<T>>, ToggleFunc] {
  const state = ref<T>(initValue as T);
  const _reverseValue = reverseValue === undefined ? !state.value : reverseValue;

  const toggle = () => {
    state.value = (state.value === initValue ? _reverseValue : initValue) as UnwrapRef<T>;
  };

  return [state, toggle];
}

export default useToggle;
