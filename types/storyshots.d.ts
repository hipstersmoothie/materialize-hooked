declare module '@storybook/addon-storyshots-puppeteer' {
  export function imageSnapshot({
    storybookUrl,
    getMatchOptions,
    customizePage
  }: {
    storybookUrl: string;
    getMatchOptions: any;
    customizePage: any;
  }): any;
}
