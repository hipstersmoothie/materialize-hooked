declare module '@storybook/addon-storyshots-puppeteer' {
  export function imageSnapshot({
    storybookUrl,
    getMatchOptions
  }: {
    storybookUrl: string;
    getMatchOptions: any;
  }): any;
}
