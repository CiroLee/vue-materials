import { defineStore } from 'pinia';

export const counterStore = defineStore('counter', {
  state: () => {
    return {
      counter: 0,
    };
  },
  actions: {
    changeCounter(value: number) {
      this.counter += value;
    },
  },
});
