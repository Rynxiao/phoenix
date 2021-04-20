function throttle(fn, timeout, mustRun) {
  let timeoutHandler = null
  let startTime = new Date().getTime()

  return (...args) => {
    let currTime = new Date().getTime()

    if (timeoutHandler) {
      clearTimeout(timeoutHandler)
    }

    if (currTime - startTime > mustRun) {
      fn.apply(this, args)
      startTime = currTime
    } else {
      timeoutHandler = setTimeout(() => {
        fn.apply(this, args)
      }, timeout)
    }
  }
}

module.exports = throttle
