const assert = require('assert')
const LRUCache = require('../LRUCache')

describe('LURCache', () => {
  it('should return latest key when the node is pushed', () => {
    const cache = new LRUCache()
    cache.pushNode('key1', 1)
    cache.pushNode('key2', 2)
    cache.pushNode('key3', 3)
    cache.pushNode('key4', 4)
    cache.pushNode('key5', 5)
    cache.pushNode('key6', 6)
    assert.strictEqual(cache.head.key, 'key6')
  })

  it('should return latest used key when the node is used recently', () => {
    const cache = new LRUCache()
    cache.pushNode('key1', 1)
    cache.pushNode('key2', 2)
    cache.pushNode('key3', 3)
    cache.pushNode('key4', 4)
    cache.pushNode('key5', 5)
    cache.getNode('key2')
    assert.strictEqual(cache.head.key, 'key2')
  })
})
