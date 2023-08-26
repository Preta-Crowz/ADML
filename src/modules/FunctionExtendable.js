class FunctionExtendable {
  before = [];
  after = [];

  body() {
    throw new window.NotImplementedError();
  }

  call(namespace, ...realArgs) {
    let args = [...realArgs];
    for (const f of before) {
      // "before" functions changes arguments, or just run other codes without return
      args = f.call(namespace, ...args) || args;
    }
    // Call main function
    let r = this.body.call(namespace, ...args);
    for (const f of after) {
      // "after" functions changes returns, or just run other codes without return
      r = f.call(namespace, ...args) || r;
    }
  }

  addBefore = f => before.push(f);
  addAfter = f => after.push(f);
}