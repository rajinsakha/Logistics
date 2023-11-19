import PropTypes from 'prop-types';

const InputField = ({name, placeholder, Icon}) => {
  return (
    <div className='flex items-center rounded-xl relative border-solid h-16'>
      <label className='absolute top-[-10px] left-4' htmlFor={name}>{name}</label>
      <Icon className="absolute text-xl ml-4"/>
      <input type="text" className='py-4 px-12  rounded-xl border-solid border border-["#979797"]' name={name} placeholder={placeholder} />
    </div>
  )
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
  };

export default InputField


