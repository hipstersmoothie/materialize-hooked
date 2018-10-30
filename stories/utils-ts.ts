import { action as _action } from '@storybook/addon-actions';

export const action = (name: string) => {
  const tempAction = _action(name);
  tempAction.toString = () => `action(${name})`;
  return tempAction;
};
