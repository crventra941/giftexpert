import { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e ) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length > 2) {
      setCategory(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={inputValue} />
    </form>
  )
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}
