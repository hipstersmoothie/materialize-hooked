import makeClass from 'classnames';
import { Tabs, TabsOptions } from 'materialize-css';
import * as React from 'react';

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
  /** Where the tab links to */
  link: string;
  /** Text title of the tab */
  text: string;
  /**  Used for linking to external content */
  target?: string;
  /**
   * Display the tab as disabled
   * @default
   */
  isDisabled?: boolean;
  /**
   * Display the tab as active
   * @default
   */
  isActive?: boolean;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
}

export const Tab: React.SFC<TabProps> = ({
  className,
  link,
  text,
  target,
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
      <a target={target} className={anchorClass} href={link}>
        {text}
      </a>
    </li>
  );
};

Tab.defaultProps = {
  className: '',
  target: undefined,
  isActive: false,
  isDisabled: false
};

export interface TabsComponentProps extends Partial<TabsOptions> {
  /** The tabs to display */
  children: React.ReactNode;
  /** The content for the tabs to reveal */
  content?: React.ReactNode;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /**
   * Render all tabs at a fixed width.
   * @default
   */
  isFixedWidth?: boolean;
}

export const TabsComponent: React.SFC<TabsComponentProps> = ({
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
      <div className="nav-content" style={{ opacity: hasLoaded ? 1 : 0 }}>
        {content}
      </div>
    </>
  );
};

TabsComponent.defaultProps = {
  className: '',
  isFixedWidth: false
};

export default TabsComponent;
