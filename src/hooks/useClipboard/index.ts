import { ref, Ref, toRef, UnwrapRef } from 'vue';
type ActionRes = [string, undefined | unknown];
type ActionFn = () => Promise<ActionRes>;
function useClipboard(val: string): [Ref<string>, { copy: ActionFn; cut: ActionFn }] {
  const text = ref(val);
  async function copy(): Promise<ActionRes> {
    try {
      await navigator.clipboard.writeText(text.value);
      return [text.value, undefined];
    } catch (error) {
      return [val, error];
    }
  }

  async function cut(): Promise<ActionRes> {
    const temp = text.value;
    try {
      await navigator.clipboard.writeText(text.value);
      text.value = '';
      return [temp, undefined];
    } catch (error) {
      return [temp, error];
    }
  }

  return [text, { cut, copy }];
}

export default useClipboard;
