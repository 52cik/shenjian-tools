let cache = {};

function set(key, val) {
  cache[key] = val;
}

function get(key) {
  return cache[key];
}

function del(key) {
  delete cache[key];
}

function clear() {
  cache = {};
}

export default {
  set,
  get,
  del,
  clear,
};
