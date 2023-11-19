import PropTypes from 'prop-types';

const Button = ({text, className}) => {
  return (
    <button className={`custom-btn secondary ${className}`}>{text}</button>
  )
}


Button.PropTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Button
