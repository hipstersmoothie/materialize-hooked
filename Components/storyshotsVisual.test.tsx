import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import * as path from 'path';

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
    customSnapshotsDir,
    failureThreshold: 0.2,
    failureThresholdType: 'percent'
  };
};

// tslint:disable-next-line no-http-string
let storybookUrl = 'http://localhost:9001';

if (process.env.CI) {
  // 👈 if in CI environment point to static build
  storybookUrl = `file://${path.join(__dirname, '../storybook-static')}`;
}

function customizePage(page: any) {
  return page.setViewport({
    width: 1000,
    height: 600
  });
}

/* 👇 Initialize our Image storyshots suite */
initStoryshots({
  suite: 'Image Storyshots',
  storyKindRegex: /^((?!.*?Javascript\/Media - Slider|CSS\/Media).)*$/,
  test: imageSnapshot({
    storybookUrl,
    getMatchOptions,
    customizePage
  })
});
