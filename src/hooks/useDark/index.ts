import { ref, Ref, UnwrapRef } from 'vue';
import useEventListener from '../useEventListener';
import { Fn } from '../types/hooks';
/**
 * @desc useDark
 * @param autoChange if set true, the value will be reactive
 * with system changed
 */
function useDark(): [Ref<UnwrapRef<boolean>>, Fn];
function useDark(autoChange: false): [Ref<UnwrapRef<boolean>>, Fn];
function useDark(autoChange: true): Ref<UnwrapRef<boolean>>;
function useDark(autoChange?: boolean): Ref<UnwrapRef<boolean>> | [Ref<UnwrapRef<boolean>>, Fn] {
  const darkMathches = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = ref<boolean>(darkMathches.matches);

  function setDark() {
    isDark.value = !isDark.value;
  }

  if (autoChange) {
    useEventListener(darkMathches, 'change', (event) => {
      if ((event as MediaQueryListEvent).matches) {
        isDark.value = true;
      } else {
        isDark.value = false;
      }
    });
    return isDark;
  }
  return [isDark, setDark];
}

export default useDark;
