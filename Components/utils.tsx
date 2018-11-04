// @ts-ignore
import { State } from '@sambego/storybook-state';
import { action as _action } from '@storybook/addon-actions';
// @ts-ignore
import { baseFonts } from '@storybook/components';
import { StoryDecorator } from '@storybook/react';
import * as React from 'react';

export const action = (name: string) => {
  const tempAction = _action(name);
  tempAction.toString = () => `action(${name})`;
  return tempAction;
};

const styles = {
  width: '100%',
  minHeight: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const Wrapper = ({ children, style }: any) => (
  <div style={style || styles}>{children}</div>
);

export const createDummyPage = (style?: object): StoryDecorator => storyFn => {
  if (process.env.NODE_ENV === 'test') {
    return <div>{storyFn()}</div>;
  }

  return <Wrapper style={style}>{storyFn()}</Wrapper>;
};

export const stylesheetBase = {
  infoBody: {
    ...baseFonts,
    fontWeight: 300,
    lineHeight: 1.45,
    fontSize: '15px',
    border: '2px solid #eee',
    padding: '30px 40px',
    borderRadius: '3px',
    backgroundColor: '#fff',
    margin: '20px auto',
    maxWidth: 1000
  },
  jsxInfoContent: {
    borderTop: '1px solid #eee',
    margin: '20px 0 0 0'
  },
  header: {
    h1: {
      margin: '2rem 0',
      padding: 0,
      fontSize: '35px'
    },
    h2: {
      margin: '0 0 10px 0',
      padding: 0,
      fontWeight: 400,
      fontSize: '22px'
    },
    body: {
      borderBottom: '1px solid #eee',
      paddingTop: 10,
      marginBottom: 10
    }
  },
  source: {
    h1: {
      margin: '3rem 0px 2rem',
      padding: '0 0 10px 0',
      fontSize: '25px',
      borderBottom: '1px solid #EEE'
    }
  },
  propTableHead: {
    margin: '20px 0px',
    fontSize: 20
  }
};

interface IInfoParams {
  text?: string;
  styles: { [key: string]: any };
  inline?: boolean;
  components?: any;
  propTablesExclude?: (React.StatelessComponent<any> | React.ReactNode)[];
}

export const wInfo = (
  text?: string | boolean,
  propTablesExclude?: (React.StatelessComponent<any> | React.ComponentType)[]
) => {
  if (
    process.env.NODE_ENV === 'test' ||
    process.env.STORYBOOK_MODE === 'TEST' ||
    typeof text === 'boolean'
  ) {
    return { disable: true };
  }

  const out: IInfoParams = {
    inline: true,
    styles: stylesheetBase,
    components: {
      p: ({ children }: any) => <p>{children}</p>
    },
    propTablesExclude: propTablesExclude
      ? [...propTablesExclude, Wrapper, React.Fragment, State]
      : [Wrapper, React.Fragment, State]
  };

  if (text) {
    out.text = text;
  }

  return out;
};
