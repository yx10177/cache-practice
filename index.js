const { RecentlyUsedCache } = require('./src/recently-used-cache');

const cache = new RecentlyUsedCache({ capacity: 3 });
cache.put('1', 'a', 1);
cache.put('2', 'b', 2);
cache.put('3', 'c', 3);
cache.put('4', 'd', 4);

cache.print();