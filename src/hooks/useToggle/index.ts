import { isRef, Ref, ref, UnwrapRef } from 'vue';

type ToggleFunc = () => void;

/**
 * @desc hook - toogle a value
 * @param initValue [optional] initial value
 * @param reverseValue [optional] reverse value
 */
function useToggle<T>(initValue?: T, reverseValue?: T): [Ref<UnwrapRef<T>>, ToggleFunc] {
  if (isRef(initValue) || isRef(reverseValue)) {
    throw new Error(`neither initValue nor reverseValue should be typeof Ref`);
  }
  const state = ref<T>(initValue as T);
  const _reverseValue = reverseValue === undefined ? !state.value : reverseValue;

  const toggle = () => {
    state.value = (state.value === initValue ? _reverseValue : initValue) as UnwrapRef<T>;
  };

  return [state, toggle];
}

export default useToggle;
