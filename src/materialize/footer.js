import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

export const FooterCopyright = ({ text, year, children }) => (
  <div className="footer-copyright">
    <div className="container">
      © {year} {text}
      {children}
    </div>
  </div>
);

FooterCopyright.propTypes = {
  text: PropTypes.string,
  year: PropTypes.string.isRequired,
  children: PropTypes.node
};

FooterCopyright.defaultProps = {
  text: undefined,
  children: undefined
};

export const FooterBody = ({ title, description, links }) => (
  <React.Fragment>
    <div className="col l6 s12">
      <h5 className="white-text">{title}</h5>
      <p className="grey-text text-lighten-4">{description}</p>
    </div>
    <div className="col l4 offset-l2 s12">
      <h5 className="white-text">Links</h5>

      <ul>
        {links.map(([text, href]) => (
          <li key={`${href}-${text}`}>
            <a className="grey-text text-lighten-3" href={href}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </React.Fragment>
);

FooterBody.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
};

const Footer = ({ className, copyright, copyrightText, year, children }) => {
  const footerClass = makeClass({
    'page-footer': true,
    [className]: className
  });

  return (
    <footer className={footerClass}>
      <div className="container">
        <div className="row">{children}</div>
      </div>
      {copyrightText || year ? (
        <FooterCopyright year={year} text={copyrightText} />
      ) : (
        copyright
      )}
    </footer>
  );
};

Footer.propTypes = {
  copyright: PropTypes.node,
  copyrightText: PropTypes.string,
  year: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Footer.defaultProps = {
  copyright: undefined,
  copyrightText: undefined,
  text: undefined,
  year: undefined,
  className: ''
};

export default Footer;
