import React, { PropTypes } from 'react';

const Test = (props) => {
  const text = props.writing === '' ? 'This is a stupid test' : props.writing;
  return (
    <button onClick={props.changeText}>{text}</button>
  )
}

// Test.propTypes = {
//   writing: PropTypes.string.isRequired,
//   changeText: PropTypes.func.isRequired,
// }

export default Test;
