class LRUCache{
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map()
    }

    get(key) {
        if(!this.cache.get(key)) {
            return -1
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value)
    }

    put(key, value) {
        if(this.cache.get(key)) {
            this.cache.delete(key)
        }

        this.cache.set(key, value);

        if(this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value)            
        }
    }

}

const lruCache = new LRUCache(3);
lruCache.put(1, 1); // cache is {1=1}
lruCache.put(2, 2); // cache is {1=1, 2=2}
lruCache.put(3, 3); // cache is {1=1, 2=2, 3=3}
console.log(lruCache.get(2)); // returns 2, cache is {1=1, 3=3, 2=2}
lruCache.put(4, 4); // evicts key 1, cache is {3=3, 2=2, 4=4}
console.log(lruCache.get(1)); // returns -1 (not found)
