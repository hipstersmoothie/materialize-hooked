import { toast, ToastOptions } from 'materialize-css';

export interface ToastProps extends Partial<ToastOptions> {
  text: string;
  children: (revealToast: () => void) => React.ReactElement<any>;
}

export const Toast: React.SFC<ToastProps> = ({
  text,
  children,
  ...options
}) => {
  return children(() => toast({ html: text, ...options }));
};

Toast.defaultProps = {
  displayLength: 4000,
  inDuration: 300,
  outDuration: 375,
  completeCallback: undefined,
  activationPercent: 0.8
};

export default Toast;
