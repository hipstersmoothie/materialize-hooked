import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import * as path from 'path';

try {
  initStoryshots({
    suite: 'Storyshots',
    integrityOptions: { cwd: __dirname },
    test: multiSnapshotWithOptions({})
  });

  const getMatchOptions = ({
    context: { fileName }
  }: {
    context: { fileName: string };
  }) => {
    const customSnapshotsDir = `${fileName.slice(
      0,
      fileName.lastIndexOf('/')
    )}/_image_snapshots_`;

    return {
      customSnapshotsDir
    };
  };

  // tslint:disable-next-line no-http-string
  let storybookUrl = 'http://localhost:9001';

  if (process.env.CI) {
    // 👈 if in CI environment point to static build
    storybookUrl = `file://${path.join(__dirname, '../storybook-static')}`;
  }

  /* 👇 Initialize our Image storyshots suite */
  initStoryshots({
    suite: 'Image Storyshots',
    test: imageSnapshot({
      storybookUrl,
      getMatchOptions
    })
  });
} catch (e) {
  console.log(e);
}

test('one', () => {
  const a = 1;
  expect(a === 1).toBe(true);
});
