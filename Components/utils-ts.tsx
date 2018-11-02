import * as React from 'react';
import { action as _action } from '@storybook/addon-actions';
import { StoryDecorator } from '@storybook/react';
// @ts-ignore
import { baseFonts } from '@storybook/components';
//@ts-ignore
import { State } from '@sambego/storybook-state';

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
  text?: string,
  propTablesExclude?: (
    | React.StatelessComponent<any>
    | React.ComponentType<{}>)[]
) => {
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
