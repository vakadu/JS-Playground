class LFUCache{
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if(this.cache.has(key)) {
            let {value, count} = this.cache.get(key);
            this.cache.set(key, { value, count: count+1 })
        }                
    }

    put(key, val) {  
         if (this.cache.has(key)) {
            let { count, value } = this.cache.get(key);
            this.cache.set(key, { value, count: count + 1 });
            return;
        }

        if(this.cache.size > this.capacity) {
            let minFreq = Math.min(...Array.from(this.cache.values()).map((item) => item.count));
            let minKey = Array.from(this.cache.entries()).filter(([k, v]) => v.count === minFreq);
            let [keyToEvict] = minKey[0];
            this.cache.delete(keyToEvict);
        }
        this.cache.set(key, {
            value: val, 
            count: 1
        });   
    }
}

const lfuCache = new LFUCache(2);
lfuCache.put(1, 1);  // cache is {1=1}
lfuCache.put(2, 2);  // cache is {1=1, 2=2}
console.log(lfuCache.get(1));  // returns 1
lfuCache.put(3, 3);  // evicts key 2, cache is {1=1, 3=3}
console.log(lfuCache.get(2));  // returns -1 (not found)
console.log(lfuCache.get(3));  // returns 3
