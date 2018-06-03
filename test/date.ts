import test from 'ava';
import * as date from '../src/date';

test('date.getTime', (t) => {
  let dt;

  dt = date.getTime('2018年06月03日00:00:00');
  t.is(dt.getTime(), Date.parse('2018-06-03 00:00:00'));

  dt = date.getTime('time is 2018年06月03日00:00:00 ');
  t.is(dt.getTime(), Date.parse('2018-06-03 00:00:00'));

  dt = date.getTime('time is 2018-6-3 0:0:0 ');
  t.is(dt.getTime(), Date.parse('2018-06-03 00:00:00'));

  dt = date.getTime('time is 2018-6-3 0:0 ');
  t.is(dt.getTime(), Date.parse('2018-06-03 00:00:00'));

  dt = date.getTime('time is 2018-6-11 ');
  t.is(dt.getTime(), Date.parse('2018-06-11 00:00:00'));

  dt = date.getTime('no time');
  t.is(dt.getTime(), +new Date(0));
});

test('date.expired', (t) => {
  t.false(date.expired(new Date(), '2h'));
  t.true(date.expired(new Date(Date.now() - (3 * 60 * 60 * 1000)), '2h'));
  t.true(date.expired('2018-06-01', '1d'));
});
