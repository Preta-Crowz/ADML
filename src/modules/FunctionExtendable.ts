/* eslint @typescript-eslint/no-explicit-any: 0 */

type FunctionBefore = (...args) => any;
type FunctionAfter<T> = (...args, Rvalue :T) => T;

export default class FunctionExtendable<T> {
  before: FunctionBefore[] = [];
  after: FunctionAfter<T>[] = [];

  body(...args): T {
    throw new window.NotImplementedError();
  }

  call(namespace, ...realArgs):T {
    let args = [...realArgs];
    for (const f of before) {
      // "before" functions changes arguments, or just run other codes without return
      args = f.call(namespace, ...args) || args;
    }
    // Call main function
    let r = this.body.call(namespace, ...args);
    for (const f of after) {
      // "after" functions changes returns, or just run other codes without return
      r = f.call(namespace, r, ...args) || r;
    }
  }

  addBefore(f: FunctionBefore) {
    before.push(f);
  }

  addAfter(f: FunctionAfter<T>) {
    after.push(f);
  }
}