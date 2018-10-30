import * as React from 'react';
import { action as _action } from '@storybook/addon-actions';
import { StoryDecorator } from '@storybook/react';

export const action = (name: string) => {
  const tempAction = _action(name);
  tempAction.toString = () => `action(${name})`;
  return tempAction;
};

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const createDummyPage = (
  overrides?: object
): StoryDecorator => storyFn => (
  <div style={overrides || styles}>{storyFn()}</div>
);
