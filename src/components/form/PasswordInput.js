import React, { useState } from 'react';

const PasswordInput = () => {
  const [isPasswordMasked, setIsPasswordMasked] = useState(true);

  setIsPasswordMasked(!isPasswordMasked);

  return (
    <div>
      <input type={isPasswordMasked ? 'password' : 'text'} {...this.props} />
      <button type="button" onClick={this.handlePasswordToggle}>
        {isPasswordMasked ? 'show' : 'hide'}
      </button>
    </div>
  );
};

export default PasswordInput;
