import * as React from 'react';
import makeClass from 'classnames';
import { Sidenav, SidenavOptions } from 'materialize-css';

const { useEffect, useRef } = React;

type OnChangeCallback = (event: React.ChangeEvent<HTMLInputElement>) => void;

export const useSideNav = (
  ref: React.RefObject<HTMLUListElement>,
  options: SidenavOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Sidenav.init(ref.current, options);
    }
  });
};

export interface NavSearchProps {
  /** Called when search value changes */
  onChange: OnChangeCallback;
  /** The value of the search input */
  value: string;
}

export const NavSearch: React.SFC<NavSearchProps> = ({ onChange, value }) => (
  <div className="nav-wrapper">
    <form>
      <div className="input-field">
        <input
          required
          id="search"
          type="search"
          value={value}
          onChange={onChange}
        />
        <label className="label-icon" htmlFor="search">
          <i className="material-icons">search</i>
        </label>
        <i className="material-icons">close</i>
      </div>
    </form>
  </div>
);

export interface NavItemProps {
  /**
   * The nav item is active
   * @default false
   */
  isActive?: boolean;
  /**
   * The nav item is a button
   * @default false
   */
  isButton?: boolean;
  /** Called when the nav item is clicked */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  href: string;
  icon?: string;
  text?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  className?: string;
  anchorClassName?: string;
  children?: React.ReactNode;
}

export const NavItem: React.SFC<NavItemProps> = ({
  href,
  text,
  isActive,
  children,
  isButton,
  iconLeft,
  iconRight,
  className,
  anchorClassName,
  icon,
  onClick
}) => {
  const itemClass = makeClass(className, {
    active: isActive
  });
  const anchorClass = makeClass(anchorClassName, {
    'waves-effect waves-light btn': isButton
  });

  return (
    <li className={itemClass}>
      <a className={anchorClass} href={href} onClick={onClick}>
        {text || children}
        {icon && (
          <i
            className={`material-icons ${
              iconLeft ? 'left' : iconRight ? 'right' : ''
            }`}
          >
            {icon}
          </i>
        )}
      </a>
    </li>
  );
};

NavItem.defaultProps = {
  onClick: undefined,
  children: undefined,
  text: undefined,
  isActive: false,
  isButton: false
};

export interface NavProps {
  /** String to be used in the brand section of the nav bar */
  logo: string;
  /** Target for mobile sidebar toggle */
  target?: string;
  /**
   * Wether the nav should use a mobile sidebar
   * @default false
   */
  useSideNav?: boolean;
  /** NavItem components in nav bar */
  children: React.ReactNode;
  /** Extra content to display in the navBar */
  content?: React.ReactNode | string;
  /**
   * Displayed the navItems on the left
   * @default false
   */
  isLeft?: boolean;
  /**
   * Use a fixed header
   * @default false
   */
  isFixed?: boolean;
  /**
   * Keep Logo Centered
   * @default false
   */
  hasCenteredLogo?: boolean;
  /**
   * Render teh nav as a search bar
   * @default false
   */
  isSearch?: boolean;
  /** Called when the logo is clicked */
  onClickLogo?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Nav: React.SFC<NavProps> = ({
  logo,
  children,
  target,
  useSideNav,
  content,
  isLeft,
  isFixed,
  hasCenteredLogo,
  isSearch,
  onClickLogo
}) => {
  const finalTarget = useSideNav ? 'mobile-sidebar' : target;
  const alignment = isLeft ? 'left' : 'right';
  const logoAlignment = hasCenteredLogo ? 'center' : isLeft ? 'right' : '';

  return (
    <div className={isFixed ? 'navbar-fixed' : ''}>
      <nav className={content ? 'nav-extended' : ''}>
        {isSearch ? (
          children
        ) : (
          <div className="nav-wrapper">
            <a className={`brand-logo ${logoAlignment}`} onClick={onClickLogo}>
              {logo}
            </a>
            {finalTarget && (
              <a href="#" data-target={finalTarget} className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
            )}
            <ul className={`${alignment} hide-on-med-and-down`}>{children}</ul>
          </div>
        )}

        {content && <div className="nav-content">{content}</div>}
      </nav>
    </div>
  );
};

Nav.defaultProps = {
  useSideNav: false,
  target: undefined,
  content: undefined,
  onClickLogo: undefined,
  isLeft: false,
  isFixed: false,
  hasCenteredLogo: false,
  isSearch: false
};

export interface SideNavProps extends Partial<SidenavOptions> {
  /** The id that will open the sidebar */
  target: string;
  /** The navItems to display */
  children: React.ReactNode;
}

export const SideNav: React.SFC<SideNavProps> = ({
  children,
  target,
  ...options
}) => {
  const sidenav = useRef<HTMLUListElement>();
  useSideNav(sidenav, options as SidenavOptions);

  return (
    <ul ref={sidenav} className="sidenav" id={target}>
      {children}
    </ul>
  );
};

const NavBar: React.SFC<NavProps> = props => {
  const { children, target, useSideNav } = props;
  const finalTarget = useSideNav ? 'mobile-sidebar' : target;

  return (
    <>
      <Nav {...props} />
      {useSideNav
        ? finalTarget && <SideNav target={finalTarget}>{children}</SideNav>
        : null}
    </>
  );
};

export default NavBar;
