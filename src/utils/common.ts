export const getType = (v?: any): string => Object.prototype.toString.call(v).slice(8, -1).toLowerCase();

export const isAllTrue = <T = boolean>(arr: T[], fn = (p: T): boolean => Boolean(p)) => arr.every(fn);
