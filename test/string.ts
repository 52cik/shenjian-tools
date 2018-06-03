import test from 'ava';
import * as string from '../src/string';

test('string.isDeep', (t) => {
  t.deepEqual(string.getJSON('{"foo":"bar"}'), { foo: 'bar' });
  t.deepEqual(string.getJSON('callback({"foo":"bar"})'), { foo: 'bar' });
  t.deepEqual(string.getJSON('Invalid', { foo: 'bar' }), { foo: 'bar' });
  t.deepEqual(string.getJSON('Invalid'), {});
});

test('string.clearImg', (t) => {
  const img1 = '<img alt title src="/img/a.png">';
  const img2 = '<img src="/img/a.png">';
  t.is(string.clearImg(img1), img2);
  t.is(string.clearImg(img1, false), img2);
});

test('string.fixImgExt', (t) => {
  t.is(string.fixImgExt('/img/a.png', false), '/img/a.png');
  t.is(string.fixImgExt(' '), ' ');
  t.is(string.fixImgExt('/2018/a.png@250w_1e_1c'), '/2018/a.png@250w_1e_1c.png');
  t.is(string.fixImgExt('/2018/a.png?t=123'), '/2018/a.png?t=123');
  t.is(string.fixImgExt('/2018/a?t=123'), '/2018/a.jpg?t=123');
});

test('string.fixHttp', (t) => {
  t.is(string.fixHttp(' '), ' ');
  t.is(string.fixHttp('https://a.b.c'), 'https://a.b.c');
  t.is(string.fixHttp('//a.b.c'), 'http://a.b.c');
});

test('string.fixImg', (t) => {
  t.is(string.fixImg(' '), ' ');
});

test('string.strLen', (t) => {
  t.is(string.strLen('aaa'), 0);
  t.is(string.strLen(''), 0);
  t.is(string.strLen('<a href="/home">首页</a>'), 2);
  t.is(string.strLen('返回 [<a href="/home">首页</a>] ！'), 5);
});
