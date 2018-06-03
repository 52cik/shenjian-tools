import test from 'ava';
import * as store from '../src/store';

test('store.set/get', (t) => {
  store.set('foo', { bar: 1 });
  t.deepEqual(store.get('foo'), { bar: 1 });
});

test('store.del', (t) => {
  store.set('foo', { bar: 1 });
  store.del('foo');
  t.is(store.get('foo'), undefined);
});

test('store.clear', (t) => {
  store.set('foo', { bar: 1 });
  store.clear();
  t.is(store.get('foo'), undefined);
});
