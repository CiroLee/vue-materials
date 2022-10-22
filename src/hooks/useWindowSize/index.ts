import { ref, Ref } from 'vue';
import useEventListener from '../useEventListener';
function useWindowSize(includeScrollbar?: boolean): [Ref<number>, Ref<number>] {
  const width = ref(0);
  const height = ref(0);
  function update() {
    width.value = includeScrollbar ? window.innerWidth : window.document.documentElement.clientWidth;
    height.value = includeScrollbar ? window.innerHeight : window.document.documentElement.clientHeight;
  }
  update();
  useEventListener(window, 'resize', update);

  return [width, height];
}

export default useWindowSize;
