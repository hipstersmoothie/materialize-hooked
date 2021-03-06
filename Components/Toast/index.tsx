import { toast, ToastOptions } from 'materialize-css';

type ToastOnClick = (revealToast: () => void) => React.ReactElement<any>;

export interface ToastProps extends Partial<ToastOptions> {
  /** Text to display with the toast */
  text?: string;
  /** Function the uses the toast function onclick */
  children: ToastOnClick;
}

export const Toast: React.SFC<ToastProps> = ({
  text,
  children,
  ...options
}) => {
  return children(() => toast({ html: text, ...options }));
};

export default Toast;
