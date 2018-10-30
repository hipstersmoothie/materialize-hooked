import React, { useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Sidenav } from 'materialize-css';

export const useSideNav = (ref, options) => {
  useEffect(() => {
    Sidenav.init(ref.current, options);
  });
};

export const NavSearch = ({ onChange, value }) => (
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

NavSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.node.isRequired
};

export const NavItem = ({ href, text, isActive, isButton, onClick }) => (
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

NavItem.propTypes = {
  isActive: PropTypes.bool,
  isButton: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  onClick: undefined,
  isActive: false,
  isButton: false
};

const Nav = ({
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

      {useSideNav && <SideNav target={finalTarget}>{children}</SideNav>}
    </Fragment>
  );
};

Nav.propTypes = {
  logo: PropTypes.string.isRequired,
  target: PropTypes.string,
  useSideNav: PropTypes.bool,
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  isLeft: PropTypes.bool,
  isFixed: PropTypes.bool,
  hasCenteredLogo: PropTypes.bool,
  isSearch: PropTypes.bool,
  onClickLogo: PropTypes.func
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

export const SideNav = ({ children, target }) => {
  const sidenav = useRef();
  useSideNav(sidenav);

  return (
    <ul ref={sidenav} className="sidenav" id={target}>
      {children}
    </ul>
  );
};

SideNav.propTypes = {
  target: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Nav;
