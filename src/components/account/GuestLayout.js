import React from 'react';
import AuthenticationWrapper from './AuthenticationWrapper';
import { replace } from 'gatsby';

const GuestLayout = ({ children }) => {
  return (
    <AuthenticationWrapper>
      {({ isAuthenticated }) =>
        isAuthenticated
          ? typeof window !== 'undefined'
            ? replace(`/account`)
            : null
          : children
      }
    </AuthenticationWrapper>
  );
};

export default GuestLayout;
