import React, { useState } from 'react';

const PasswordInput = props => {
  const [isPasswordMasked, setIsPasswordMasked] = useState(true);

  const handlePasswordToggle = () => {
    setIsPasswordMasked(!isPasswordMasked);
  };

  return (
    <div>
      <input type={isPasswordMasked ? 'password' : 'text'} {...props} />
      <button type="button" onClick={handlePasswordToggle}>
        {isPasswordMasked ? 'show' : 'hide'}
      </button>
    </div>
  );
};

export default PasswordInput;
