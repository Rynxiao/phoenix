function debounce(fn, timeout) {
  let timeoutHandler = null

  return (...args) => {
    if (timeoutHandler) {
      clearTimeout(timeoutHandler)
    }

    timeoutHandler = setTimeout(() => {
      fn.apply(this, args)
    }, timeout)
  }
}

module.exports = debounce
