class OrderedNodes {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.heap.sort((a, b) => a.getScore() - b.getScore());
    }

    pop() {
        return this.heap.shift();
    }

}

module.exports = { OrderedNodes }