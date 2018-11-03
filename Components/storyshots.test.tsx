import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots';

try {
  initStoryshots({
    suite: 'Storyshots',
    integrityOptions: { cwd: __dirname },
    test: multiSnapshotWithOptions({})
  });
} catch (e) {
  console.log(e);
}

test('one', () => {
  const a = 1;
  expect(a === 1).toBe(true);
});
