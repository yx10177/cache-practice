class Node {
    constructor({ key, value, weight }) {
        this.key = key;
        this.value = value;
        this.weight = weight;
        this.score = this._caculateScore(weight, 0);
        this.lastAccessedTime = 0;
    }

    _caculateScore(weight, lastAccessedTime) {
        const time = Date.now() - lastAccessedTime + 1;
        return weight / (Math.log(time)) + 1;
    }

    getValue() {
        this.score = this._caculateScore(this.weight, this.lastAccessedTime);
        this.lastAccessedTime = Date.now();
        return this.value;
    }

    getScore() {
        return this.score;
    }

    set(value, weight) {
        this.value = value;
        this.weight = weight;
        this.score = this._caculateScore(weight, this.lastAccessedTime);
    }
}

module.exports = { Node }
