import { onUnmounted } from 'vue';

function useEventListener<E extends keyof WindowEventMap>(
  target: EventTarget,
  eventType: E,
  listener: (event: Event) => void,
  options?: boolean | AddEventListenerOptions,
): void {
  const opt = options ?? false;
  target.addEventListener(eventType, listener, opt);

  onUnmounted(() => {
    target.removeEventListener(eventType, listener, opt);
  });
}
export default useEventListener;
