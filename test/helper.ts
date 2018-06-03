import test from 'ava';
import * as helper from '../src/helper';

test('helper.isDeep', (t) => {
  t.false(helper.isDeep(0));
  t.true(helper.isDeep(2000));
});
