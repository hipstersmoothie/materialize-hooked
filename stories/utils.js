import { action as _action } from '@storybook/addon-actions';

export const action = (...args) => {
  const tempAction = _action(...args);
  tempAction.toString = () => `action('${args[0]}')`;
  return tempAction;
};
