import test from 'ava';
import ms from '../src/ms';

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

test('ms 0', (t) => {
  t.is(ms('1'.repeat(101)), 0);
  t.is(ms('no time'), 0);
});

test('ms: ms', (t) => {
  t.is(ms('1'), 1);
  t.is(ms('1ms'), 1);
  t.is(ms('1msec'), 1);
  t.is(ms('1msecs'), 1);
  t.is(ms('1millisecond'), 1);
  t.is(ms('1milliseconds'), 1);
});

test('ms: s', (t) => {
  t.is(ms('1s'), s);
  t.is(ms('1sec'), s);
  t.is(ms('1secs'), s);
  t.is(ms('1second'), s);
  t.is(ms('1seconds'), s);
});

test('ms: m', (t) => {
  t.is(ms('1m'), m);
  t.is(ms('1min'), m);
  t.is(ms('1mins'), m);
  t.is(ms('1minute'), m);
  t.is(ms('1minutes'), m);
});

test('ms: h', (t) => {
  t.is(ms('1h'), h);
  t.is(ms('1hr'), h);
  t.is(ms('1hrs'), h);
  t.is(ms('1hour'), h);
  t.is(ms('1hours'), h);
});

test('ms: d', (t) => {
  t.is(ms('1d'), d);
  t.is(ms('1day'), d);
  t.is(ms('1days'), d);
});

test('ms: w', (t) => {
  t.is(ms('1w'), w);
  t.is(ms('1week'), w);
  t.is(ms('1weeks'), w);
});

test('ms: w', (t) => {
  t.is(ms('1y'), y);
  t.is(ms('1yr'), y);
  t.is(ms('1yrs'), y);
  t.is(ms('1year'), y);
  t.is(ms('1years'), y);
});
