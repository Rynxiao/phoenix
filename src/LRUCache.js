function Node(key, value) {
  this.key = key
  this.value = value
  this.prev = null
  this.next = null
}

class LRUCache {
  head = null
  tail = null
  cache = new Map()
  capacity = 5

  constructor(capacity = 5) {
    this.capacity = capacity
  }

  getNode(key) {
    if (!this.cache.has(key)) {
      return -1
    }

    const founded = this.cache.get(key)

    this.removeNode(founded)
    this.addToTop(founded)

    return founded.value
  }

  pushNode(key, value) {
    if (this.cache.has(key)) {
      this.getNode(key)
    } else {
      const newNode = new Node(key, value)
      if (this.cache.size >= this.capacity) {
        this.cache.delete(this.tail.key)
        this.removeNode(this.tail)
      }

      this.addToTop(newNode)
      this.cache.set(key, newNode)
    }
  }

  removeNode(node) {
    let prev
    let next

    if (node === this.head) {
      next = this.head.next
      this.head.next = null
      this.head = next
      return
    }

    if (node === this.tail) {
      prev = this.tail.prev
      this.tail.prev = null
      this.tail = prev
      return
    }

    prev = node.prev
    next = node.next
    prev.next = next
    next.prev = prev
    node.prev = null
    node.next = null
  }

  addToTop(node) {
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
  }
}

module.exports = LRUCache
