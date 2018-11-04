import { RenderFunction } from '@storybook/react';

declare module '@storybook/react' {
  export interface Story {
    add(
      storyName: string,
      callback: RenderFunction,
      options?: any
    ): this;
    addParameters(options: any): this;
  }
}
