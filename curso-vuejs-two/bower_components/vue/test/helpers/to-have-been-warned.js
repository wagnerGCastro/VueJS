function noop () {}

if (typeof console === 'undefined') {
  window.console = {
    warn: noop,
    error: noop
  }
}

// avoid info messages during test
console.info = noop

let asserted
function hasWarned (msg) {
  var count = console.error.calls.count()
  var args
  while (count--) {
    args = console.error.calls.argsFor(count)
    if (args.some(containsMsg)) {
      return true
    }
  }

  function containsMsg (arg) {
    return arg.toString().indexOf(msg) > -1
  }
}

// define custom matcher for warnings
beforeEach(() => {
  asserted = []
  spyOn(console, 'error')
  jasmine.addMatchers({
    toHaveBeenWarned: () => {
      return {
        compare: msg => {
          asserted = asserted.concat(msg)
          var warned = Array.isArray(msg)
            ? msg.some(hasWarned)
            : hasWarned(msg)
          return {
            pass: warned,
            message: warned
              ? 'Expected message "' + msg + '" not to have been warned'
              : 'Expected message "' + msg + '" to have been warned'
          }
        }
      }
    }
  })
})

afterEach(done => {
  const warned = msg => asserted.some(assertedMsg => msg.toString().indexOf(assertedMsg) > -1)
  let count = console.error.calls.count()
  let args
  while (count--) {
    args = console.error.calls.argsFor(count)
    if (!warned(args[0])) {
      done.fail(`Unexpected console.error message: ${args[0]}`)
      return
    }
  }
  done()
})
