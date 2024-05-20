const { Node } = require('./node');
const { OrderedNodes } = require('./ordered-nodes');

class RecentlyUsedCache {
    constructor({ capacity = 10 } = {}) {
        this.capacity = capacity;
        this.map = new Map();
        this.orderedNodes = new OrderedNodes();
    }

    put(key, value, weight) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.set(value, weight);
        } else {
            const newNode = new Node({ key, value, weight });
            if (this.map.size == this.capacity) {
                const minNode = this.orderedNodes.pop();
                this.map.delete(minNode.key);
            }
            this.map.set(key, newNode);
            this.orderedNodes.push(newNode);
        }

    }

    get(key) {
        const node = this.map.get(key);
        if (node) {
            return node.getValue();
        }
        return -1;
    }

    print() {
        console.log(this.map);
    }   
}

module.exports = { RecentlyUsedCache }

// javascript Array.sort() reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#see_also 
// https://mathiasbynens.be/demo/sort-stability
// As of V8 v7.0 / Chrome 70, V8 uses the stable TimSort algorithm which time complexity is O(n log n).


// The time complexity of put(key, value, weight) is O(n log n ), n is the capacity in the cache.
// The time complexity of get(key) is O(1)