import makeClass from 'classnames';
import * as React from 'react';

export interface FooterCopyrightProps {
  /** Text of the copyright */
  text?: string;
  /** Year of the copyright */
  year?: string;
  /** Other elements to display in the copyright, usually links. */
  children?: React.ReactNode;
}

export const FooterCopyright: React.SFC<FooterCopyrightProps> = ({
  text,
  year,
  children
}) => (
  <div className="footer-copyright">
    <div className="container">
      © {year} {text}
      {children}
    </div>
  </div>
);

export interface FooterBodyProps {
  /** Footer title */
  title: string;
  /** Footer description */
  description: string;
  /** Link list to display in footer */
  links: string[][];
}

export const FooterBody: React.SFC<FooterBodyProps> = ({
  title,
  description,
  links
}) => (
  <>
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
  </>
);

export interface FooterProps extends FooterCopyrightProps {
  /** Your own copyright element */
  copyright?: React.ReactNode;
  /** Text of the copyright. Not used when copyright component provided */
  copyrightText?: string;
  /** Text of the copyright. Not used when copyright component provided */
  year?: string;
  /** Content of the footer */
  children: React.ReactNode;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
}

export const Footer: React.SFC<FooterProps> = ({
  className = '',
  copyright,
  copyrightText,
  year,
  children
}) => {
  const footerClass = makeClass(className, {
    'page-footer': true
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
