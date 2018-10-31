import * as React from 'react';
import { Sidenav, SidenavOptions } from 'materialize-css';

const { useEffect, useRef, Fragment } = React;

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
  onChange: OnChangeCallback;
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
  isActive?: boolean;
  isButton?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  href: string;
  text: string;
}

export const NavItem: React.SFC<NavItemProps> = ({
  href,
  text,
  isActive,
  isButton,
  onClick
}) => (
  <li className={isActive ? 'active' : ''}>
    <a
      className={isButton ? 'waves-effect waves-light btn' : ''}
      href={href}
      onClick={onClick}
    >
      {text}
    </a>
  </li>
);

NavItem.defaultProps = {
  onClick: undefined,
  isActive: false,
  isButton: false
};

export interface NavProps {
  logo: string;
  target?: string;
  useSideNav?: boolean;
  children: React.ReactNode;
  content?: React.ReactNode | string;
  isLeft?: boolean;
  isFixed?: boolean;
  hasCenteredLogo?: boolean;
  isSearch?: boolean;
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
    <Fragment>
      <div className={isFixed ? 'navbar-fixed' : ''}>
        <nav className={content ? 'nav-extended' : ''}>
          {isSearch ? (
            children
          ) : (
            <div className="nav-wrapper">
              <a
                className={`brand-logo ${logoAlignment}`}
                onClick={onClickLogo}
              >
                {logo}
              </a>
              {finalTarget && (
                <a
                  href="#"
                  data-target={finalTarget}
                  className="sidenav-trigger"
                >
                  <i className="material-icons">menu</i>
                </a>
              )}
              <ul className={`${alignment} hide-on-med-and-down`}>
                {children}
              </ul>
            </div>
          )}

          {content && <div className="nav-content">{content}</div>}
        </nav>
      </div>

      {useSideNav &&
        finalTarget && <SideNav target={finalTarget}>{children}</SideNav>}
    </Fragment>
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
  target: string;
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

SideNav.defaultProps = {
  edge: 'left',
  draggable: true,
  inDuration: 250,
  outDuration: 200,
  onOpenStart: undefined,
  onOpenEnd: undefined,
  onCloseStart: undefined,
  onCloseEnd: undefined
};

export default Nav;
