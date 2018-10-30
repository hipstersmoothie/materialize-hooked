import * as React from 'react';
import makeClass from 'classnames';

export interface FooterCopyright {
  text?: string;
  year?: string;
  children?: React.ReactElement<{}>;
}

export const FooterCopyright = ({ text, year, children }: FooterCopyright) => (
  <div className="footer-copyright">
    <div className="container">
      © {year} {text}
      {children}
    </div>
  </div>
);

export interface FooterBodyProps {
  title: string;
  description: string;
  links: string[][];
}

export const FooterBody = ({ title, description, links }: FooterBodyProps) => (
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

export interface FooterProps {
  copyright?: React.ReactNode;
  copyrightText?: string;
  year?: string;
  children: React.ReactElement<{}>;
  className?: string;
}

const Footer = ({
  className = '',
  copyright,
  copyrightText,
  year,
  children
}: FooterProps) => {
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

export default Footer;
