import download from './lib';
import test from 'tapava';
import tmp from 'tmp';
import fs from 'then-fs';

test('downloadGithubPackage', function * (t) {
  const {name: dir} = tmp.dirSync();

  yield download({arg: 'kesla/node-snappy', dir});
  const actualFiles = yield fs.readdir(dir);
  const expectedFiles = ['snappy'];
  t.deepEqual(actualFiles, expectedFiles);
});
