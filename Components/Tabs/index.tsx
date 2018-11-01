import * as React from 'react';
import makeClass from 'classnames';
import { Tabs, TabsOptions } from 'materialize-css';

const { useRef, useEffect, useState } = React;

export const useTabs = (
  ref: React.RefObject<HTMLUListElement>,
  options: TabsOptions
) => {
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoaded && ref.current) {
      Tabs.init(ref.current, options);
      setLoaded(true);
    }
  });

  return hasLoaded;
};

export interface TabProps {
  link: string;
  text: string;
  isDisabled?: boolean;
  isActive?: boolean;
  className?: string;
}

export const Tab: React.SFC<TabProps> = ({
  className,
  link,
  text,
  isDisabled,
  isActive
}) => {
  const tabClass = makeClass(className, {
    tab: true,
    disabled: isDisabled
  });
  const anchorClass = makeClass({
    active: isActive
  });

  return (
    <li className={tabClass}>
      <a className={anchorClass} href={link}>
        {text}
      </a>
    </li>
  );
};

Tab.defaultProps = {
  className: '',
  isActive: false,
  isDisabled: false
};

export interface TabsComponentProps extends Partial<TabsOptions> {
  children: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
  isFixedWidth?: boolean;
}

const TabsComponent: React.SFC<TabsComponentProps> = ({
  children,
  className,
  isFixedWidth,
  content,
  ...options
}) => {
  const tabs = useRef<HTMLUListElement>();
  const hasLoaded = useTabs(tabs, options as TabsOptions);
  const tabsClass = makeClass(className, {
    tabs: true,
    'tabs-fixed-width': isFixedWidth
  });

  return (
    <>
      <ul ref={tabs} className={tabsClass}>
        {children}
      </ul>
      <div style={{ display: hasLoaded ? 'initial' : 'none' }}>{content}</div>
    </>
  );
};

TabsComponent.defaultProps = {
  className: '',
  isFixedWidth: false
};

export default TabsComponent;
