import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import makeClass from 'classnames';
import { Tabs } from 'materialize-css';

export const useTabs = (ref, options) => {
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoaded) {
      Tabs.init(ref.current, options);
      setLoaded(true);
    }
  });

  return hasLoaded;
};

export const Tab = ({ className, link, text, isDisabled, isActive }) => {
  const tabClass = makeClass({
    tab: true,
    [className]: className,
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

Tab.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  className: PropTypes.string
};

Tab.defaultProps = {
  className: '',
  isActive: false,
  isDisabled: false
};

const TabsComponent = ({
  children,
  className,
  isFixedWidth,
  content,
  ...options
}) => {
  const tabs = useRef();
  const hasLoaded = useTabs(tabs, options);
  const tabsClass = makeClass({
    tabs: true,
    [className]: className,
    'tabs-fixed-width': isFixedWidth
  });

  return (
    <React.Fragment>
      <ul ref={tabs} className={tabsClass}>
        {children}
      </ul>
      <div style={{ opacity: hasLoaded ? 100 : 0 }}>{content}</div>
    </React.Fragment>
  );
};

TabsComponent.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  className: PropTypes.string,
  duration: PropTypes.number,
  onShow: PropTypes.func,
  isFixedWidth: PropTypes.bool,
  swipeable: PropTypes.bool,
  responsiveThreshold: PropTypes.number
};

TabsComponent.defaultProps = {
  className: '',
  duration: 300,
  onShow: null,
  isFixedWidth: false,
  swipeable: false,
  responsiveThreshold: Infinity
};

export default TabsComponent;
