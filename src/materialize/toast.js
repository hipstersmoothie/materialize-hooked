import PropTypes from 'prop-types';
import { toast } from 'materialize-css';

const Toast = ({ text, children, classes, ...options }) => {
  return children(() => toast({ html: text, classes }, options));
};

Toast.propTypes = {
  html: PropTypes.string.isRequired,
  displayLength: PropTypes.number,
  inDuration: PropTypes.number,
  outDuration: PropTypes.number,
  classes: PropTypes.string,
  completeCallback: PropTypes.func,
  activationPercent: PropTypes.number
};

Toast.defaultProps = {
  displayLength: 4000,
  inDuration: 300,
  outDuration: 375,
  classes: '',
  completeCallback: null,
  activationPercent: 0.8
};

export default Toast;
